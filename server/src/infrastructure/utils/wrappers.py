from server.src.infrastructure.blueprints import auth_api_entry, dashboard_api_entry, \
                                        admin_dashboard_api_entry, page_entry, public_api_entry

'''
API routes
'''
def auth_route(*urls, **kwargs):
    '''
    A decorator to route resources.
    '''
    def wrapper(cls):
        auth_api_entry.add_resource(cls, *urls, **kwargs)
        return cls
    return wrapper

def dashboard_route(*urls, **kwargs):
    '''
    A decorator to route resources.
    '''
    def wrapper(cls):
        dashboard_api_entry.add_resource(cls, *urls, **kwargs)
        return cls
    return wrapper

def admin_route(*urls, **kwargs):
    '''
    A decorator to route resources.
    '''
    def wrapper(cls):
        admin_dashboard_api_entry.add_resource(cls, *urls, **kwargs)
        return cls
    return wrapper

'''
Pages routes
'''
def pages_route(*urls, **kwargs):
    '''
    A decorator to route resources.
    '''
    def wrapper(cls):
        page_entry.add_resource(cls, *urls, **kwargs)
        return cls
    return wrapper

def public_route(*urls, **kwargs):
    '''
    A decorator to route resources.
    '''
    def wrapper(cls):
        public_api_entry.add_resource(cls, *urls, **kwargs)
        return cls
    return wrapper

