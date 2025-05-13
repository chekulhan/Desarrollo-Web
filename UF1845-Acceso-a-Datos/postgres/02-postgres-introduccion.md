# Creación de base de datos:
- No hace falta asignar un OID (object ID) => legacy
- Template1 es por defecto


# Creacion de TABLES



Primero, crear un sequence y despues asignar un default value a la columna:
```sql
nextval('table1_seq') 
```

Tipos de datos (data types):
https://www.cheat-sheets.org/saved-copy/postgresql-cheat-sheet.pdf


Data Types de Arrays:
```sql
INSERT INTO table (value, values)
VALUES ('hello again', ARRAY['hello', 'hola']);

INSERT INTO table (value, values)
VALUES ('hello again', '{"hello", "hola"}');

SELECT * FROM public.table 
WHERE values[1] = 'hello';
-- Access 1st element (PostgreSQL arrays are 1-based)

SELECT value, unnest(values) AS values
FROM table;
```



El equivalente en Oracle es:
```sql
CREATE TYPE number_array AS VARRAY(10) OF NUMBER;

CREATE TABLE resultados (
    id NUMBER,
    scores number_array
);

INSERT INTO resultados (id, scores)
VALUES (1, number_array(10, 20, 30, 12));
INSERT INTO resultados (id, scores)
VALUES (2, number_array(6, 4, 1));

SELECT * 
FROM resultados;


```


## Actividades

Usando Oracle Live, migrar la base de datos de Scott (emp, dept) a PostgreSQL. Incluir algunos datos.
![Scott](../../x-assets/UF1845/scott.schema.png)



**Strategy:**
WAL (Write-Ahead Logging):

Registra todas las modificaciones realizadas en la base de datos, lo que permite recuperar el estado exacto hasta el momento del último registro en caso de un fallo.

Ideal para recuperación a punto en el tiempo (PITR) en producción.

Más complejo y requiere gestionar los archivos de WAL de manera continua.

File Copy:

Realiza una copia completa de los archivos del sistema de base de datos en un momento específico.

Más sencillo y rápido, ideal para desarrollo o respaldos rápidos.

No permite una recuperación a punto en el tiempo, pero es suficiente para muchos entornos de desarrollo.

Recomendación:
Desarrollo: Usa File Copy por su simplicidad.

Producción: Usa WAL si necesitas recuperación precisa y a punto en el tiempo.

**Locale**
Las opciones de **locale** en PostgreSQL definen cómo se manejan la comparación de cadenas, el ordenamiento, la clasificación de caracteres, y el formato de fechas y números. Aquí están las opciones explicadas brevemente:

1. **libc**:  
   - Basado en la biblioteca C del sistema operativo. Utiliza la configuración local del sistema para el ordenamiento y la clasificación de caracteres.
   - **Recomendado para**: Desarrollo simple en un solo idioma, cuando no necesitas soporte avanzado para idiomas o caracteres complejos.

2. **ICU (International Components for Unicode)**:  
   - Proporciona un soporte más avanzado para la internacionalización, con mejores reglas de ordenamiento y clasificación para muchos idiomas diferentes.
   - **Recomendado para**: Aplicaciones que necesitan manejar varios idiomas o que requieren un manejo complejo de caracteres, como idiomas con alfabetos no latinos (ej. chino, árabe).

3. **Builtin**:  
   - Opciones locales básicas incorporadas en PostgreSQL, sin depender de bibliotecas externas como **libc** o **ICU**.
   - **Recomendado para**: Casos muy específicos, generalmente no se recomienda para la mayoría de los proyectos.

**Resumen**:  
- **libc** para proyectos simples en un solo idioma.
- **ICU** para proyectos multilingües o que necesitan soporte avanzado de caracteres.
- **Builtin** solo en casos muy específicos.

![Crear DB](../../x-assets/UF1845/db1.png)
![Crear DB](../../x-assets/UF1845/db2.png)
![Crear DB](../../x-assets/UF1845/db3.png)

# VS Code Extension

![VS Code Extension](../../x-assets/UF1845/postgresextension.png)

# Postgres Docs
https://www.postgresql.org/docs/17/index.html
