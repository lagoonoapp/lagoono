#import boto3
import time
from io import BytesIO
#from PIL import Image
#from botocore.exceptions import ClientError
#import dns.resolver
from flask import jsonify, request, current_app, render_template
from flask_login import current_user
from email.message import EmailMessage
from server.src.infrastructure.utils.global_functions import print_traceback, get_config_var, get_field_value, get_message_from_exception
from server.src.infrastructure.db_models.consts.result_type import Result

ses_client = None
ses2_client = None
route53_client = None
#s3_resource = None

def get_ses_credentials():
    global ses_client, ses2_client, s3_resource, eb_client, route53_client
    if ses_client is None:
        ses_client = boto3.client('ses', 
            aws_access_key_id = get_config_var('AWS_IAM_SES_ACCESS_KEY'), #['SES_AWS_ACCESS_KEY_ID'],
            aws_secret_access_key = get_config_var('AWS_IAM_SES_SECRET_ACCESS_KEY'), #['SES_AWS_SECRET_KEY'],
            region_name='ca-central-1')
        
    if ses2_client is None:
        ses2_client = boto3.client('sesv2', 
            aws_access_key_id = get_config_var('AWS_IAM_SES_ACCESS_KEY'), #['SES_AWS_ACCESS_KEY_ID'],
            aws_secret_access_key = get_config_var('AWS_IAM_SES_SECRET_ACCESS_KEY'), #['SES_AWS_SECRET_KEY'],
            region_name='ca-central-1')
        
    if route53_client is None:
        route53_client = boto3.client('route53',
            region_name='ca-central-1',
            aws_access_key_id = get_config_var('AWS_IAM_SES_ACCESS_KEY'), #['SES_AWS_ACCESS_KEY_ID'],
            aws_secret_access_key = get_config_var('AWS_IAM_SES_SECRET_ACCESS_KEY'), #['SES_AWS_SECRET_KEY'],
        )

def send_email(email_list:list, subject, text_body, html_body, sender_name, sender_email):
    get_ses_credentials()
    try:
        charset = 'UTF-8'
        response = ses_client.send_email(
            Source=f'"{sender_name}" <{sender_email}>',
            Destination={
                'BccAddresses': email_list  
            },
            Message={
                'Subject': {
                    'Data': subject,
                    'Charset': charset
                },
                'Body': {
                    'Text': {
                        'Data': text_body,
                        'Charset': charset
                    },
                    'Html': {
                        'Data': html_body,
                        'Charset': charset
                    }
                }
            },
            ReplyToAddresses=[
                sender_email,
            ],
            #ReturnPath='string',
            #SourceArn='string',
            #ReturnPathArn='string',
            #ConfigurationSetName='string'
        )
        #print(response)
    except Exception as ex:
        print_traceback(ex)
        # Log
        pass

def check_amazonses_txt_record(domain):
    try:
        answers = dns.resolver.resolve(domain, 'TXT')
        txt_records = [r.to_text().strip('"') for r in answers]
        return txt_records
    except Exception as e:
        return f"DNS query failed: {e}"



def send_reply(message_dict):
    get_ses_credentials()
    try:
        # Replace with actual Message-ID from original email
        original_msg_id = message_dict.get('reply_to')

        msg = EmailMessage()
        msg['Subject'] = message_dict.get('subject')
        msg['From'] = message_dict.get('from')
        msg['To'] =  message_dict.get('to')
        msg['In-Reply-To'] = original_msg_id
        msg['References'] = original_msg_id
        msg['Message-ID'] = message_dict.get('mesage_id')
        msg.set_content(message_dict.get('content'))

        response = ses_client.send_raw_email(
            RawMessage={'Data': msg.as_bytes()}
        )
    except Exception as ex:
        print_traceback(ex)
        return Result(False, error=get_message_from_exception(ex))
    return Result(True)