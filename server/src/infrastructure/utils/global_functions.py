from collections import defaultdict
from datetime import datetime
from dateutil import parser
#import emoji
import os, sys, random, re, string
import json
import pytz
import regex
import textwrap
import traceback
import uuid
from flask import current_app, request
#from profanity_check import predict, predict_prob
from urllib.parse import urlparse
from bs4 import BeautifulSoup
#from server.src.infrastructure.utils.lang import languages
from server.src.infrastructure.utils.extensions import db
#from lingua import Language, LanguageDetectorBuilder

engine_container = None

def init(app):
    app.jinja_env.globals.update(get_abs_path = get_abs_path) 
    app.jinja_env.globals.update(get_config_var = get_config_var) 

    global engine_container
    with app.app_context():
        if engine_container is None:
            engine_container = db.get_engine()

def cleanup_session(session):
    """
    This method cleans up the session object and also closes the connection pool using the dispose method.
    """
    global engine_container
    session.close()
    engine_container.dispose()
    return

def get_abs_path(relative_path):
    return os.path.abspath(os.path.join(current_app.root_path, relative_path))

def safe_cast(val, to_type, default=None):
    try:
        return to_type(val)
    except (ValueError, TypeError):
        return default

# This function should be accessible only from CONFIG
# to-do: remove from direct using
def get_config_var(var_name, app = current_app):
    if var_name in app.config:
        return app.config[var_name]
    else:
        return os.environ.get(var_name)

def flat_validation_errors(errors_object):
    errors = []
    if errors_object:
        for index, error_key in enumerate(errors_object.keys()):
            for error in errors_object[error_key]:
                #errors.append(error_key + ': ' + error)
                errors.append(error)
    return ', '.join(errors)

def parse_list_var(list_value):
    if list_value is None or list_value == '':
        return []
    return list_value.split(' ')

def request_payload(key_id=None, default_value=None):
    '''
    key_id: Payload variable value. If not provided, the whole payload object is returned
    '''
    try:
        payload = request.get_json(force=True)
        if key_id is not None:
            return payload.get(key_id) or default_value
        return payload
    except Exception as ex:
        return default_value if default_value is not None else None

'''def generate_slug(id, text):
    id_parts = str(id).split('-')
    id_last = id_parts[len(id_parts) - 1]
    return id_last + '/' + re.sub('[^0-9a-zA-Z]+', '-', text.lower()).strip('-')'''

def generate_slug(text, id=None):
    try:
        text = translit(text, reversed=True)
    except Exception as ex:
        pass # It means it has only latin letters
    if id is not None:
        id_parts = str(id).split('-')
        id_last = id_parts[len(id_parts) - 1]
        return id_last + '/' + re.sub('[^0-9a-zA-Z]+', '-', text.lower()).strip('-')
    else:
        text = re.sub('[^0-9a-zA-Z]+', '-', text.lower()).strip('-')
        if not text:
            text = generate_short_id()
    return text

def get_field_value(obj, field_full_name, default_value=None):
    '''
    Checks if a field exists and return its value. A field can be nested (pass its name separated by comma "."). 
    If a field doesn't exists return None or default_value if specified.
    '''
    if obj is None:
        return default_value if default_value is not None else None
    fields = field_full_name.split('.')
    current_object = obj
    for field in fields:
        if hasattr(current_object, 'get') and current_object.get(field) is not None:
            current_object = current_object.get(field)
        else:
            if hasattr(current_object, field):
                current_object = getattr(current_object, field)
                if current_object is None:
                    return default_value if default_value is not None else None
            else:
                return default_value if default_value is not None else None
    return current_object

def generate_short_id(k=6):
    alphabet = string.ascii_lowercase + string.digits
    id = ''.join(random.choices(alphabet, k=k))
    return id

def print_traceback(e):
    '''
    Prints the traceback and returns the string with all the traceback information
    '''
    lines = traceback.format_exception(type(e), e, e.__traceback__)
    print(''.join(lines))
    return lines

sci_expression_re = r'(\$.*?\$|\(.*?\)|\[\[.*?\]\])'

def add_surround(match):
    return '$$' + match.group(0) + '$$'

def parse_sci_expressions(text):
    return re.sub(sci_expression_re, add_surround, text)

def determine_profanity(text):
    '''
    Returns True if profanity was detected, else False.
    '''
    prof_list = predict([text])
    return prof_list[0] > 0.5

def lang_name_by_code(code):
    #lang_name = next(filter(lambda lang: lang[0] == code, languages), None)
    lang_name = LANGUAGES.get('code')
    lang_title = lang_name if lang_name is not None else 'English'
    return lang_title
    parts = lang_title.split(';')
    if len(parts) == 1:
        return lang_title
    new_lang_name = ', '.join(parts[0:len(parts)-1])
    new_lang_name = new_lang_name + f' or {parts[len(parts) - 1]}'
    return new_lang_name

def string_is_url(text):
    '''
    Checks if a given string is URL. Only works with provided protocol.
    '''
    if text is None or text == '':
        return False
    url_test_object = urlparse(text)
    return url_test_object.netloc != '' and url_test_object.scheme != ''

def detect_language(text):
    lang_name = 'English'
    try:
        global translator
        name = 'English'
        code = 'en'
        if text:
            lang_data = translator.detect(text or '')
            found_language = LANGUAGES.get(lang_data.lang.lower()) is not None
            if found_language:
                code = lang_data.lang
            name = LANGUAGES[lang_data.lang.lower()].capitalize() if LANGUAGES.get(lang_data.lang.lower()) is not None else 'English'
            
        
        #lang_name = lang_name_by_code(lang_data.lang if lang_data else 'en')
        '''lang_detector = LanguageDetectorBuilder.from_all_languages().build()
        lang_data = lang_detector.detect_language_of(text)
        lang_name = lang_name_by_code(lang_data.iso_code_639_1.name.lower() if lang_data else 'en')'''
    except Exception as ex:
        print_traceback(ex)
        return (lang_name, 'en')
    return (name, code)

def get_language_code(lang_name):
    inverted_codes = dict((v,k) for k,v in LANGUAGES.items())
    return inverted_codes.get(lang_name.lower()) or 'en'

def translate_text(text, lang_code_desired, lang_code_source=None, do_not_translate_flag=False):
    if do_not_translate_flag == True:
        return text
    if text is None or text == '':
        return ''
    if lang_code_source == lang_code_desired:
        return text
    try:
        global translator
        translated_text = translator.translate(text, dest=lang_code_desired)
        return translated_text.text
    except Exception as ex:
        print_traceback(ex)
        print('Destination language is ', lang_code_desired, ' for text: ', text)
    return text

def cleanup_string(text):
    if text is None:
        return ''
    stdout = text.strip()\
        .replace('\x00', '')\
        .replace('\00', '')\
        .replace('\0', '')
    return stdout

def uuid_from_string(str_id:str):
    try:
        uid = uuid.UUID(str_id)
        return uid
    except Exception as ex:
        return None

def str_to_dict(string):
    try:
        dict_object = json.loads(string)
        return dict_object
    except:
        return {}

def str_to_type(val, to_type, default=None):
    '''
    Converts a string to another type safely.
    '''
    try:
        return to_type(val)
    except (ValueError, TypeError):
        return default
    
def convert_string_to_time(date_string, timezone):

    date_time_obj = parser.parse(date_string) #datetime.strptime(date_string[:26], '%Y-%m-%d %H:%M:%S.%f')
    date_time_obj_timezone = date_time_obj.astimezone(timezone)
    #date_time_obj = date_time_obj.replace(tzinfo=None)
    #date_time_obj_timezone = timezone.localize(date_time_obj)

    return date_time_obj_timezone

def get_current_datetime_str():
    current_utc_time = datetime.now(pytz.utc)
    formatted_datetime = current_utc_time.strftime('%B %d, %Y %H:%M:%S %Z timezone, %A')
    return formatted_datetime

def extract_text_from_html(html_text):
    parser_name = 'html.parser'
    parser = BeautifulSoup(html_text, parser_name)
    content = cleanup_string(parser.get_text())
    return content

def extract_words(text):
    """
    Extracts words from a string by splitting on common separators like
    comma, period, semicolon, colon, space, etc.
    Removes empty words and returns a list of words.
    """
    # Split by anything that's not a letter or number
    words = re.split(r'[\s,.;:|/\\!?(){}\[\]-]+', text)
    # Remove empty strings
    return [word for word in words if word]

def get_substring_cut(input_string, n):
    '''
    Returns the substring ending not in the middle of a word.
    '''
    #return textwrap.shorten()
    if len(input_string) <= n:
        return input_string

    # Find the next word boundary within the specified length
    index = n
    ending = ''
    while index > 0 and input_string[index] not in [' ', '.', '-', '\n']:
        index += 1
    if input_string[index] != '.':
        ending = '...'
    else:
        ending = input_string[index]
    return input_string[:index] + ending

def get_message_from_exception(ex, default_message):
    message = ''
    try:
        content = get_field_value(ex, 'response.content')
        if (content is not None and isinstance(content, bytes)):
            content_str = content.decode('utf-8')
            content_json = json.loads(content_str)
            message = get_field_value(content_json, 'error.message')
            if message is not None and message != '':
                return message
        if not message:
            if hasattr(ex, 'message'):
                message = ex.message
            elif hasattr(ex, 'user_message'):
                message = ex.user_message
            elif hasattr(ex, 'args'):
                if len(ex.args):
                    message = ex.args[0]
    except Exception as exc:
        print('Exception when getting the error message', ex)
        print_traceback(exc) # Do nothing, something went wrong
    return message or default_message or ''

### Functions for forming the sources 
def form_markdown_source(source_object):
    source = source_object.get('source')
    title = source_object.get('title') or ''
    is_url = string_is_url(source)
    if is_url:
        return f"[{title}]({source})"
    else:
        if source and title:
            return f"{source}{':' + title if title else ''}"
        else:
            if title:
                return title
    return ''



class __SafeDict(dict):
    def __missing__(self, key):
        return '{' + key + '}'

def format_string_safe(text:str, **kwargs):
    try:
        result = text.format_map(__SafeDict(kwargs))
    except Exception as ex:
        print(ex)
        result = text
    return result

def format_string_safe_v1(text:str, **kwargs):
    if text is None:
        return ''
    result = text
    try:    
        for k in kwargs:
            result = result.replace(f'{{{k}}}', str(kwargs[k]))
        return result
    except Exception as ex:
        print_traceback(ex)
    return text

def normalize_text(text):
    '''
    This functions adds spaces between sentences and does not add spaces in URLs.
    '''
    result = ''
    try:
        def make_decision_on_replace(g):
            first_group = g.group(1)
            if 'http' in first_group:
                return g.group(0)
            return f'{g.group(1)}. {g.group(2)}'

        result = re.sub(r"(\S*)\.([A-Z])", make_decision_on_replace, text)
    except Exception as ex:
        print(ex)
        result = text
    return result

def get_app_host_data(request):
    host_name = request.host #'127.0.0.1:5014'
    ws_protocol = 'ws'
    http_protocol = 'http'
    local_version = get_config_var('ENV') == 'dev'
    if not local_version:
        #host_name = 'app.lagoono.com'
        ws_protocol = 'wss'
        http_protocol = 'https'
    return (host_name, http_protocol, ws_protocol)

def prepare_text_for_land_detection(text, prev_messages):
    if text is None:
        text = ''
    user_messages = '\n'.join(list(map(lambda mes: mes.content, list(filter(lambda message: message.role == 'user', prev_messages)))))
    user_messages += f'\n{text}'
    user_messages_clean = (regex.sub(r'[^\p{L}\p{N}\s]', '', user_messages) or '')[-100:]
                
    return user_messages_clean

def truncate_at_separator(text, limit=100, separators=r"[ .,!?;:\n]"):
    '''
    Get the first {limit} symbols, stops at the closest separtor.
    '''
    result_text = ''
    if len(text) <= limit:
        return text
    match = re.search(separators, text[limit:])
    if match:
        end = limit + match.start()
        result_text = text[:end].rstrip()
    else:
        result_text = text[:limit].rstrip()  # fallback: first 100 characters
    return f'{result_text}...'

def compare_class_and_dict(class_instance, dict_instance, ignored_fields=None):
    '''
    Compare class instance and dict instance including nested dict fields.
    Returns list of differences in format:
    [
      {'field': 'x.b', 'old_value': 'b:3', 'new_value': 'b:4'},
      ...
    ]
    '''
    ignored_fields = set(ignored_fields or [])
    obj_dict = vars(class_instance)
    diffs = []

    def recurse(obj_val, dict_val, path):
        # Both are dicts: recurse into keys
        if isinstance(obj_val, dict) and isinstance(dict_val, dict):
            keys = set(obj_val.keys()) & set(dict_val.keys())
            for k in keys:
                if k in ignored_fields:
                    continue
                recurse(obj_val[k], dict_val[k], f"{path}.{k}")
        else:
            # Base case: compare values, add diff if different
            if obj_val != dict_val:
                key_name = path.split('.')[-1]
                diffs.append({
                    'field': path,
                    'old_value': obj_val,
                    'new_value': dict_val
                })

    # For each field in the class object
    for k in obj_dict:
        if k in ignored_fields:
            continue
        if k in dict_instance:
            recurse(obj_dict[k], dict_instance[k], k)

    return diffs
def is_local_version():
    local_version = get_config_var('ENV') == 'dev'
    return local_version

def clean_string_from_whitespace(s):
    # Remove all whitespace characters (space, tab, newline, carriage return, etc.)
    if not s:
        return ''
    return re.sub(r'\s+', '', s)