from views.employees import get_all_employees, add_employee

if __name__ == "__main__":
    emps = get_all_employees()
    for emp in emps:
        print(emp)

    new_emp = add_employee(8000, 'NEWNAME', 'DEVELOPER')
