import functools
import sys
from threading import Thread
from flask import current_app
from server.src.infrastructure.services.logging.log_entry_type import LogEntryType
from server.src.infrastructure.services import db_user_service

def __write_log_in_thread(app, log_event_code, type:LogEntryType, title, project_id, user_id, local_vars, **data):
    with app.app_context():
        db_user_service.create_log_entry(log_event_code, type, title, project_id, user_id, local_vars, data)

def write_log(log_event_code, type:LogEntryType, title, project_id=None, user_id=None, local_vars=None, app=None, **data):
    '''
    Write the log
    local_vars is None or locals() function
    pass additional data as dictionary via **data: var_name=var_value, ...
    '''
    if app is None:
        app = current_app._get_current_object()
    thr = Thread(target = __write_log_in_thread, args=[app, log_event_code, type, title, project_id, user_id, local_vars], kwargs=data)
    thr.start()

def write_user_log(user_id, project_id, log_entry_dict):
    '''
    Write the log entry that will be available for the end user
    local_vars is None or locals() function
    pass additional data as dictionary via **data: var_name=var_value, ...
    '''
    db_user_service.create_user_log_entry(user_id, project_id, log_entry_dict)
    '''if app is None:
        app = current_app._get_current_object()
    thr = Thread(target = __write_log_in_thread, args=[app, log_event_code, type, title, project_id, user_id, local_vars], kwargs=data)
    thr.start()'''
    
# This wrapper is not collecting data properly, maybe will be finished later.
def function_exception_wrapper(metadata=None):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            try:
                return func(*args, **kwargs)
            except Exception:
                exc_type, exc_value, exc_tb = sys.exc_info()

                # Get the innermost traceback frame (where error occurred)
                while exc_tb.tb_next:
                    exc_tb = exc_tb.tb_next
                frame = exc_tb.tb_frame
                local_vars = frame.f_locals

                #print(local_vars)
                #print(metadata)
                write_log('ExceptionCaught', 
                            LogEntryType.exception, 
                            'Exception caught by function decorator', 
                            project_id=None, user_id=None, 
                            local_vars=local_vars, app=None, 
                            metadata=metadata)
        return wrapper
    return decorator