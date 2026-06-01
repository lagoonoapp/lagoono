from enum import Enum

class TicketPriority(Enum):
    critical = 'Critical'
    high = 'High'
    medium = 'Medium'
    low = 'Low'

class TicketType(Enum):
    problem = 'Problem'
    bug = 'Bug'
    request = 'Feature request'

class TicketStatus(Enum):
    new = 'New'
    in_review = 'In review'
    planned = 'Planned'
    rejected = 'Rejected'
    in_progress = 'In progress'
    done = 'Done'
    closed = 'Closed'