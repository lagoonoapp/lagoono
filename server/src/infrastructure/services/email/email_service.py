from threading import Thread
from smtplib import SMTPException
from flask import current_app, render_template
from flask_mail import Message
from server.src.infrastructure.utils.extensions import mail
from server.src.infrastructure.services.logging import log_service, log_entry_type
from server.src.infrastructure.utils.global_functions import get_message_from_exception, print_traceback

def __send_async_email(app, msg:Message):
    with app.app_context():
        try:
            mail.send(msg)
        except SMTPException as e:
            traceback = print_traceback(e)
            log_service.write_log('EmailSendingFailure', log_entry_type.LogEntryType.exception, 
                'SMTPException when sending this email', 
                None, None,
                locals(), 
                traceback=traceback, email=msg.recipients)
        except Exception as e:
            traceback = print_traceback(e)
            log_service.write_log('EmailSendingFailure', log_entry_type.LogEntryType.exception, 
                'Generic exception when sending this email', 
                None, None,
                locals(), 
                traceback=traceback, email=msg.recipients)


def send_email(to, subject, text_body, html_body, sender_name, sender_email):
    app = current_app._get_current_object()
    recipients = [to] if isinstance(to, str) else to
    sender = (sender_name, sender_email)
    msg = Message(subject, sender = sender, recipients = recipients, reply_to = sender) 
    msg.body = text_body
    msg.html = html_body
    thr = Thread(target = __send_async_email, args=[app, msg])
    thr.start()
    return thr