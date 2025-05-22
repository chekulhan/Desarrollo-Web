from db_pg import get_session
from models.emp import Emp

def get_all_employees():
    # Crear una sesión de conexión a la base de datos
    session = get_session()
    try:
        # Consultar todos los registros de la tabla Emp
        employees = session.query(Emp).all()
        # Devolver la lista de empleados
        return employees
    finally:
        # Cerrar la sesión para liberar recursos
        session.close()

def get_employee_by_empno(empno):
    # Crear una sesión de conexión a la base de datos
    session = get_session()
    try:
        # Consultar un empleado cuyo número (empno) coincida con el dado
        # one_or_none() devuelve un único objeto o None si no existe
        employee = session.query(Emp).filter(Emp.empno == empno).one_or_none()
        # Devolver el empleado encontrado o None
        return employee
    finally:
        # Cerrar la sesión para liberar recursos
        session.close()

def get_employees_by_job(job_title):
    # Crear una sesión de conexión a la base de datos
    session = get_session()
    try:
        # Consultar todos los empleados cuyo trabajo coincida con job_title
        employees = session.query(Emp).filter(Emp.job == job_title).all()
        # Devolver la lista de empleados que cumplen el filtro
        return employees
    finally:
        # Cerrar la sesión para liberar recursos
        session.close()

def add_employee(empno, ename, job):
    session = get_session()
    try:
        # Crear una nueva instancia de Emp con los datos recibidos
        new_employee = Emp(empno=empno, ename=ename, job=job)
        
        # Agregar el nuevo empleado a la sesión
        session.add(new_employee)
        
        # Confirmar la transacción para guardar los cambios en la base de datos
        session.commit()
        
        # Opcional: devolver el objeto agregado
        return new_employee
    except Exception as e:
        # En caso de error, hacer rollback para deshacer cambios pendientes
        session.rollback()
        raise e
    finally:
        # Cerrar la sesión para liberar recursos
        session.close()



"""


session.query(Emp) \
    .filter(Emp.sal > 50000) \
    .order_by(Emp.ename) \
    .limit(10) \
    .all()


"""