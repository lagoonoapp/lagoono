from datetime import datetime
import requests
import json
from flask import current_app, request, url_for
from server.src.infrastructure.utils.global_functions import get_config_var
from server.src.infrastructure.services.logging import log_service, log_entry_type


def add_subscriber(email, username):
    api_token = get_config_var('SENDER_API_TOKEN')
    if api_token is None:
        return False
    url = 'https://api.sender.net/v2/subscribers'

    headers = {
        'Authorization': f'Bearer {api_token}',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

    payload = {
        'email': email,
        'firstname': username,
        #'lastname': 'Support',
        'groups': ['bqZ1yr'],
        #'fields': {'{$test_text}':'Documentation example','{$test_num}': 8}
    }

    response = requests.request('POST', url, headers=headers,json=payload)
    return response.ok

def add_subscriber_mailbuster(email, username):
    api_key = get_config_var('MAILBLUSTER_API_KEY')
    if api_key is None:
        return False
    url = 'https://api.mailbluster.com/api/leads'

    headers = {
        #'Authorization': api_key,
        'Content-Type': 'application/json',
        #'Accept': 'application/json',
        'Cache-Control': 'no-cache'
    }

    payload = {
        'authorization': api_key,
        'email': email,
        'firstName': username or '',
        'subscribed': True,
        'tags': ['confirmed']
    }

    response = requests.request('POST', url, headers=headers,json=payload)
    log_service.write_log('CheckSubscriptionResult', 
                log_entry_type.LogEntryType.info, 'Check how user email was added to the mailbluster', 
                None, None,
                locals())
    return response.ok