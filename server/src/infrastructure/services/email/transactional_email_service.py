from flask import jsonify, render_template
from server.src.infrastructure.services.email import email_service
from server.src.infrastructure.services import aws_ses_service
from server.src.infrastructure.utils.global_functions import get_config_var, get_field_value

def send_admin_notification(subject, text, data):
    template_name = 'admin_notification'
    if data is None:
        data = 'No data'
    data = {
        'text': text,
        'data': data
    }
    subject = f'Notification for admin: {subject}'
    _send_transactional_email(['info@lagoono.com'], template_name, subject, data, data)

def send_user_notification(user_email, username, subject, text):
    template_name = 'user_notification'
    data = {
        'text': text,
        'username': username
    }
    _send_transactional_email([user_email], template_name, subject, data, data)

def send_notification_by_event(email_list, event_type, website_id, session_id, project_name, user_nickname=''):
    pass

def send_user_transactional_email(email, template_name, subject, text_data, html_data):
    _send_transactional_email(email, template_name, subject, text_data, html_data)

def _send_transactional_email(email_list, template_name, subject, text_data, data):
    text_body = render_template('email_templates/transactional/{0}.txt'.format(template_name), 
                                #user_name = user.username, 
                                company_name = get_config_var('COMPANY_NAME'), 
                                data = text_data)
    html_body = render_template('email_templates/transactional/{0}.html'.format(template_name), 
                                #user_name = user.username, 
                                company_name = get_config_var('COMPANY_NAME'), 
                                data = data)
    email_service.send_email(email_list, subject, text_body, html_body, 
                            get_config_var('COMPANY_NAME'),
                            get_config_var('MAIL_DEFAULT_SENDER'))

    '''aws_ses_service.send_email(email_list, subject, text_body, html_body, 
                            get_config_var('COMPANY_NAME'),
                            get_config_var('MAIL_DEFAULT_SENDER'))'''


###### Mass sending with AWS SES ######

def send_mass_user_notification(email_list:list, subject, template_name, text_template_data, html_template_data):
    text_body = render_template('email_templates/transactional/{0}.txt'.format(template_name), 
                                #user_name = user.username, 
                                company_name = get_config_var('COMPANY_NAME'), 
                                data = text_template_data)
    html_body = render_template('email_templates/transactional/{0}.html'.format(template_name), 
                                #user_name = user.username, 
                                company_name = get_config_var('COMPANY_NAME'), 
                                data = html_template_data)
    aws_ses_service.send_email(email_list, subject, text_body, html_body, 'Lagoono', 'notification@lagoono.com')

###### END of Mass sending with AWS SES ######