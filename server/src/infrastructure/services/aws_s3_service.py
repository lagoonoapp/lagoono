from base64 import b64encode
from io import BytesIO
import os
#import boto3, uuid, os, shutil, requests, json, copy
#from botocore.exceptions import ClientError
from flask import jsonify, request, current_app, render_template
from flask_login import current_user
from server.src.infrastructure.db_models.consts.result_type import Result

s3_client = None
s3_resource = None

def get_s3_credentials():
    global s3_client, s3_resource, eb_client
    if s3_client is None:
        s3_client = boto3.client('s3', 
            aws_access_key_id = current_app.config['AWS_ACCESS_KEY_ID'],
            aws_secret_access_key = current_app.config['AWS_SECRET_KEY'])
    if s3_resource is None:
        s3_resource = boto3.resource('s3',        
            aws_access_key_id = current_app.config['AWS_ACCESS_KEY_ID'],
            aws_secret_access_key = current_app.config['AWS_SECRET_KEY'])


def upload_file(uploaded_file, bucket_name, folder_name, generate_id_flag, acl_data=None):
    get_s3_credentials()
    file_url = ''
    file_name = uploaded_file.filename
    full_file_name, ext = os.path.splitext(file_name)
    if generate_id_flag == 'generate':
        id = uuid.uuid4().hex
        file_name = '{0}{1}'.format(id, ext) if ext != '' else id
    try:
        preview_file = None
        key_name = '{0}/{1}'.format(folder_name, file_name)
        extra_args = {
            'ContentType': uploaded_file.content_type
        }
        if acl_data is not None:
            extra_args.update(acl_data)
        s3_client.upload_fileobj(
            uploaded_file,
            bucket_name,
            key_name,
            #uploaded_file.filename,
            ExtraArgs=extra_args
        )
        bucket_location = s3_client.get_bucket_location(Bucket = bucket_name)
        file_url = "https://s3-{0}.amazonaws.com/{1}/{2}".format(
            bucket_location['LocationConstraint'],
            bucket_name,
            key_name)
        
    except Exception as e:
        # This is a catch all exception, edit this part to fit your needs.
        print("Something went wrong during uploading a file: ", e)
        return {
            'result': False,
            'url': None, 
            'error': 'Some error occured during uploading file... pleasy, try again.'
        }
    return {
        'result': True,
        'file_url': file_url,
        'file_name': file_name
    }

def upload_url(file_name, file_content, bucket_name, folder_name, is_public):
    get_s3_credentials()
    file_url = ''
    full_file_name, ext = os.path.splitext(file_name)
    content_type = f"image/{ext.replace('.', '')}"
    id = uuid.uuid4().hex
    file_name = '{0}{1}'.format(id, ext) if ext != '' else id
    try:
        key_name = '{0}/{1}'.format(folder_name, file_name)
        '''if acl_data is not None:
            extra_args.update(acl_data)'''
        if is_public:
            s3_client.put_object(
                    Bucket=bucket_name,
                    Key=key_name,
                    Body=file_content,
                    ContentType=content_type,
                    ACL='public-read'  # Make the file publicly accessible
                )
        else:
            s3_client.put_object(
                Bucket=bucket_name,
                Key=key_name,
                Body=file_content
            )

        bucket_location = s3_client.get_bucket_location(Bucket = bucket_name)
        file_url = "https://s3-{0}.amazonaws.com/{1}/{2}".format(
            bucket_location['LocationConstraint'],
            bucket_name,
            key_name)
        
    except Exception as e:
        # This is a catch all exception, edit this part to fit your needs.
        print("Something went wrong during uploading a file: ", e)
        return {
            'result': False,
            'url': None, 
            'error': 'Some error occured during uploading file... pleasy, try again.'
        }
    return {
        'result': True,
        'file_url': file_url,
        'file_name': file_name
    }

def delete_file(bucket_name, folder_name, file_url):
    get_s3_credentials()
    try:
        file_name = file_url[file_url.rfind("/")+1:]
        key_name = '{0}/{1}'.format(folder_name, file_name)
        s3_client.delete_object(Bucket = bucket_name, Key = key_name)

    except Exception as e:
        # This is a catch all exception, edit this part to fit your needs.
        print("Something went wrong during deleting a file: ", e)
        return {
            'result': False,
            'error': 'Some error occured during deleting file... pleasy, try again.'
        }
    return {
        'result': True
    }

def get_file(bucket_name, folder_name, file_url):
    get_s3_credentials()
    try:
        file_name = file_url[file_url.rfind("/")+1:]
        key_name = '{0}/{1}'.format(folder_name, file_name)
        data = s3_client.get_object(Bucket = bucket_name, Key = key_name)
        img_data = data.get('Body').read()
        return Result(True, item={'data': img_data, 'type': data['ContentType']})
        #image_data = Image.open(BytesIO(img_data))
        image_data_string = b64encode(img_data).decode('utf-8')
        file_path, file_extension = os.path.splitext(file_name)
        image_data = f'data:image/{file_extension};base64,{image_data_string}'

    except Exception as e:
        # This is a catch all exception, edit this part to fit your needs.
        print("Something went wrong during deleting a file: ", e)
        return Result(False, error='Some error occured during deleting file... pleasy, try again.') 
    return Result(True, item=image_data)

def send_env_vars(env_vars:list): 
    # List of tuples (var_name, var_value)
    client = boto3.client('elasticbeanstalk', region_name='ca-central-1',
            aws_access_key_id = current_app.config['AWS_ACCESS_KEY_ID_DEPLOY'],
            aws_secret_access_key = current_app.config['AWS_SECRET_KEY_DEPLOY'])  # Change region as needed

    # Specify the application and environment

    application_name = 'app'  # Replace with your application name
    environment_name = 'dashboard-env-python312'  # Replace with your environment name

    # Define the new or updated environment variables
    environment_vars = list(map(lambda env_var: {'Namespace': 'aws:elasticbeanstalk:application:environment', 
                                         'OptionName': env_var[0], 
                                         'Value': env_var[1]}, env_vars)) 

    # Update the environment
    response = client.update_environment(
        ApplicationName=application_name,
        EnvironmentName=environment_name,
        OptionSettings=environment_vars
    )
    print(response)