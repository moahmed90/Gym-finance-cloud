import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase

class Base(DeclarativeBase):
    pass

_engine = None
_SessionLocal = None

def get_engine():
    global _engine, _SessionLocal
    if _engine is None:
        database_url = os.environ.get("DATABASE_URL")
        if not database_url:
            raise RuntimeError("DATABASE_URL is not set")
        _engine = create_engine(database_url, pool_pre_ping=True)
        _SessionLocal = sessionmaker(bind=_engine, autoflush=False, autocommit=False)
    return _engine

def get_db():
    # Create engine/session only when a request actually needs DB access
    if _SessionLocal is None:
        get_engine()
    db = _SessionLocal()
    try:
        yield db
    finally:
        db.close()