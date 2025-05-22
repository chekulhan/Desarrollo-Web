# Transacciones

ACID propiedades

```sql

CREATE SCHEMA IF NOT EXISTS banco;

CREATE TABLE banco.cuentas (
    id_cuenta SERIAL PRIMARY KEY,
    titular VARCHAR(100) NOT NULL,
    saldo NUMERIC(12,2) NOT NULL DEFAULT 0
);

INSERT INTO banco.cuentas (titular, saldo) VALUES
('Juan Pérez', 1000.00),
('María López', 500.00);

```

Ejecutamos la transacción poco a poco
```sql
BEGIN;

-- Leer saldo actual de la cuenta origen
SELECT saldo FROM banco.cuentas WHERE id_cuenta = 1;

UPDATE banco.cuentas
SET saldo = saldo - 200
WHERE id_cuenta = 1;


UPDATE banco.cuentas
SET saldo = saldo + 200
WHERE id_cuenta = 2;


ROLLBACK;
COMMIT;

```

¿Qué ocurre si vemos el registro de desde otra consulta?
```sql
SELECT saldo FROM banco.cuentas WHERE id_cuenta = 1;
```

En PostgreSQL, el nivel de aislamiento de transacción por defecto es 'Read Committed', lo que significa que cada consulta solo ve datos ya confirmados (committed).

**MVCC**
MVCC significa Control de concurrencia con múltiples versiones. Es una técnica que utilizan sistemas de bases de datos como PostgreSQL para manejar múltiples transacciones concurrentes sin bloquear las lecturas.

Permite que varias transacciones accedan y modifiquen la base de datos al mismo tiempo, sin que se bloqueen entre ellas y sin que unas vean datos “sucios” (no confirmados) de otras.





## Ejemplo de Rollback
```sql

BEGIN;

-- Intentar debitar cuenta con saldo insuficiente
UPDATE banco.cuentas
SET saldo = saldo - 2000
WHERE id_cuenta = 1 AND saldo >= 2000;

-- Verificar si se actualizó fila
-- En caso contrario, hacer rollback
DO $$
BEGIN
  IF NOT FOUND THEN
    RAISE NOTICE 'Saldo insuficiente, cancelando transacción';
    ROLLBACK;
  END IF;
END;
$$;

-- Si se llega aquí, se confirma la transferencia (ejemplo simplificado)
COMMIT;
```

## Actividad
Vamos a ejecutar código para crear un nuevo departamento, y a la vez, un nuevo empleado que pertenece a este departamento. Llevarlo a cabo usando transacciones. Por ejemplo:


```sql
INSERT INTO scott.dept (deptno, dname, loc)
VALUES (60, 'I+D', 'BARCELONA');

INSERT INTO scott.emp (empno, ename, job, mgr, hiredate, sal, comm, deptno)
VALUES (8888, 'ANALISTA2', 'ANALISTA', 7839, CURRENT_DATE, 3500, NULL, 60);


```


EJejmplo de niveles de aislamiento
```sql
BEGIN ISOLATION LEVEL READ COMMITTED;

-- Leer saldo actual de la cuenta origen
SELECT saldo FROM banco.cuentas WHERE id_cuenta = 1;

UPDATE banco.cuentas
SET saldo = saldo - 200
WHERE id_cuenta = 1;


UPDATE banco.cuentas
SET saldo = saldo + 200
WHERE id_cuenta = 2;


ROLLBACK;
COMMIT;

```


en otra sesion, aunque la primera transaccion ha terminado, ¿que vemos?:
```sql
BEGIN ISOLATION LEVEL READ COMMITTED;
BEGIN ISOLATION LEVEL REPEATABLE READ;
BEGIN ISOLATION LEVEL SERIALIZABLE;

SELECT saldo FROM banco.cuentas WHERE id_cuenta = 1;

--UPDATE banco.cuentas SET saldo = saldo - 500 WHERE id_cuenta = 1;

ROLLBACK;

```

Ejecutar un insert en la primera transaccion
```sql
INSERT INTO banco.cuentas (titular, saldo) VALUES
('Repeatable read', 1000.00)
```

---

En PostgreSQL cuando usas procedimientos almacenados (procedures), cada llamada a un procedimiento se ejecuta dentro de una transacción implícita:

```sql
DO $$
BEGIN
    BEGIN
        CALL biblioteca.registrar_prestamo(5, 101);
        COMMIT;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE NOTICE 'Error caught: %', SQLERRM;
            -- You could re-raise the error if you want the caller to handle it
            -- RAISE;
    END;
END
$$;



CREATE OR REPLACE PROCEDURE biblioteca.registrar_prestamo(_id_socio INT, _id_libro INT)
LANGUAGE plpgsql
AS $$
BEGIN
    BEGIN
        -- lógica del préstamo
        INSERT INTO prestamos(...) VALUES(...);

        COMMIT;  -- válido dentro de PROCEDURE
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE;
    END;
END;
$$;
```

#  Respuestas
```sql
DO $$
BEGIN
    BEGIN
        INSERT INTO scott.dept (deptno, dname, loc)
        VALUES (60, 'I+D', 'BARCELONA');

        INSERT INTO scott.emp (empno, ename, job, mgr, hiredate, sal, comm, deptno)
        VALUES (8888, 'ANALISTA2', 'ANALISTA', 7839, CURRENT_DATE, 3500, NULL, 60);

        COMMIT;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE NOTICE 'Ocurrió un error, se revierte la transacción: %', SQLERRM;
    END;
END
$$;
```