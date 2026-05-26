from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from app.core.config import settings

engine = create_engine(
    settings.DATABASE_URL,
    # This is needed for SQLite only — allows multiple threads to use the same connection
    connect_args={"check_same_thread": False},
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class that all our models will inherit from
# Think of it like DbContext in Entity Framework
Base = declarative_base()
