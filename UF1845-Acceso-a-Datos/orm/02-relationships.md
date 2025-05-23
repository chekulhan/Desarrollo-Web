

```python
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship



class Dept(Base):
    __tablename__ = 'dept'
    __table_args__ = {'schema': 'scott'}

    # incluir aqui las columnas de Dept

    employees = relationship('Emp', back_populates='department', uselist=True)


```

En el modelo Emp, hay que definir la clave foranea y su relación:

```python

    sal = Column(Integer)
    comm = Column(Integer)
    # agregar la clave foránea y la relación
    deptno = Column(Integer, ForeignKey('scott.dept.deptno'))
    department = relationship('Dept', back_populates='employees')
```

**Version Lazy Loading - Carga perezosa**
Cuando accedes a dept.employees, SQLAlchemy realiza una consulta adicional para cada departamento.
Esto puede causar el problema N+1 consultas, es decir, una consulta para departamentos y luego una por cada departamento para los empleados.

```python

from db_pg import get_session  # your session factory

def show_depts_and_emps():
    session = get_session()
    try:
        depts = session.query(Dept).all()
        for dept in depts:
            print(f"Department {dept.deptno} - {dept.dname} ({dept.loc})")
            for emp in dept.employees:
                print(f"  Employee {emp.empno}: {emp.ename} - {emp.job}")
    finally:
        session.close()
```

**Carga ansiosa - Eager Loading**
Usa joinedload para traer departamentos y empleados en una sola consulta SQL con JOIN.
Evita múltiples consultas y mejora el rendimiento cuando quieres los datos relacionados desde el principio.

```python

from sqlalchemy.orm import joinedload
from db_pg import get_session
from models import Dept  # or wherever your Dept model is

def get_departments_with_employees():
    session = get_session()
    try:
        # Use joinedload to eagerly fetch employees with each department
        depts = session.query(Dept).options(joinedload(Dept.employees)).all()
        return depts
    finally:
        session.close()

```