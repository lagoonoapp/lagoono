from cryptography.fernet import Fernet
from server.src.infrastructure.utils.global_functions import request_payload, get_field_value, get_config_var

def encrypt_string(text):
    fernet = Fernet(get_config_var('APP_KEY'))
    return fernet.encrypt(text.encode()).decode()

def decrypt_string(text):
    fernet = Fernet(get_config_var('APP_KEY'))
    return fernet.decrypt(text).decode()