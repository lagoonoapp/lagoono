from collections import defaultdict
#from server.src.infrastructure.services.db_user_service import find_notification_subscribers
from server.src.infrastructure.services.email.transactional_email_service import send_mass_user_notification

notification_data = {
    'new_post': {
        'subject': 'A new post is published on the LagoonoHQ feedback board: {post_title}',
        'text': 'Hello from Lagoono, \n we are notifying you that a new post was published: {post_title} {post_link}.',
        'html': 'Hello from Lagoono, <br> we are notifying you that a new post was published: ' + 
            '<a href="{post_link}">{post_title}</a>.'
    },
    'new_private_post': {
        'subject': 'A new private post is published on the LagoonoHQ feedback board',
        'text': 'Hello from Lagoono, \n we are notifying you that a new private post was published.',
        'html': 'Hello from Lagoono, <br> we are notifying you that a new private post was published.'
    }
}

def send_notifications(user, event_name, data_json, private_post):
    '''
    Find the users subscribed to this event and send them the automatic notification.
    '''
    email_list = []
    if private_post:
        email_list = ['info@lagoono.com']
    else:
        email_list = find_notification_subscribers(user, event_name, True)
    notif_data = notification_data.get(event_name)
    if notif_data is None:
        print('No data found for this type of event to send notifications: ', event_name)
        return
    template_name = 'subscribe_notification'
    if len(email_list):
        # Prepare data
        text_content = notif_data.get('text')
        html_content = notif_data.get('html')
        text_content = text_content.format_map(defaultdict(str, **data_json))
        html_content = html_content.format_map(defaultdict(str, **data_json))
        subject = notif_data.get('subject').format_map(defaultdict(str, **data_json))

        # Send
        send_mass_user_notification(email_list, subject, 
            template_name, {'text': text_content}, {'text': html_content})