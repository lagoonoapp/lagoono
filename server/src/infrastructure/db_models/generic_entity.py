from server.src.infrastructure.utils.extensions import db
from server.src.infrastructure.db_models.consts.result_type import Result

class GenericEntity:
    created = db.Column(db.DateTime(), nullable=True)
    updated = db.Column(db.DateTime(), nullable=True)
    def before_save(self):
        pass
    def before_fetch(self):
        pass
    def before_update(self, entity_data):
        # This is called after the object is loaded but before it is updated. 
        pass
    def after_changing_status(self, new_status):
        return Result(True)
    def save(self):
        try:
            db.session.add(self)
            db.session.commit()
        except Exception as ex:
            print('ERROR while saving entity ', self.__tablename__)
            print(ex) # to-do: log
            return False
        return True

    def delete(self):
        try:
            db.session.delete(self)
            db.session.commit()
        except Exception as ex:
            print('ERROR while saving entity ', self.__tablename__)
            print(ex) # to-do: log
            return False
        return True

    def update(self, entity_dict):
        for key, value in entity_dict.items():
            if hasattr(self, key) and key != 'id':
                setattr(self, key, value)