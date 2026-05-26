from typing import Generator

from app.db.base import SessionLocal


def get_db() -> Generator:
    """
    Dependency that provides a database session per request.
    Automatically closes the session when the request is done.

    This is like a 'using' block in C# — it ensures the DB
    connection is always properly closed, even if an error occurs.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
