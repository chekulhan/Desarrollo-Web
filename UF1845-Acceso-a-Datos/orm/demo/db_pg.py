from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DB_USER = 'postgres'
DB_PASS = 'postgres'
DB_HOST = 'localhost'
DB_PORT = '5432'
DB_NAME = 'erp'

engine = create_engine(f'postgresql+psycopg2://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}')

# Create a configured "Session" class
SessionLocal = sessionmaker(bind=engine)

def get_session():
    return SessionLocal()