from enum import Enum

class LogEntryType(Enum):
    info = 'info'
    warning = 'warning'
    exception = 'exception'
    error = 'error'