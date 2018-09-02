from sqlclient import DB_INSTANCE
from flask import jsonify

def get_element(element_ID):
    """
    Returns element with element_ID from the database, if non
    existant returns None

    Args:
        element_ID (string): Element ID

    Returns:
        Array: Array from database table
    """

    query = "SELECT * FROM elements AS e WHERE e.id LIKE %s"
    params = (element_ID)
    data = DB_INSTANCE.exec_query(query, params)
    if len(data) <= 0:
        return None
    return data[0]

def get_all_elements():
    """
    Returns all elements saved from the database
    
    Returns:
        Array: Array of all elements from the database
    """

    query = "SELECT * FROM elements"
    params = ()
    data = DB_INSTANCE.exec_query(query, params)
    return data
