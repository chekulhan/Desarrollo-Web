# Mini proyecto
El objetivo de este proyecto es permitir que los usuarios gestionen sus historias de usuario (historias ágiles o user stories), asignen prioridades y validen tanto en el cliente como en el servidor que los campos están correctamente llenados. 

COMO un developer del equipo,
QUIERO registrar una nueva historia de usuario con los siguientes datos: nombre, descripción, prioridad,
PARA poder organizar, priorizar y seguir el progreso de las tareas del proyecto de manera estructurada.



**Objetivos del Proyecto:**
- Practicar la creación de rutas y manejo de datos en el servidor usando Express.
- Utilizar EJS para mostrar dinámicamente las tareas en el navegador.
- Aplicar lógica de negocio en el servidor para categorizar y manejar tareas y en el cliente.
- Realizar validaciones en el servidor y en el cliente para garantizar la integridad de los datos.


**Tareas:**
- Crear un formulario para registrar una historia de usuario.
- Validar que los campos sean correctos en el cliente y en el servidor.
- Mostrar un mensaje adecuado según la validación realizada (si la validación es exitosa o falla).
- Usar la estructura de historia de usuario con nombre, descripción, prioridad y estado.
- Implementar la lógica para agregar nuevas historias de usuario en el servidor sin una base de datos (usando un array en memoria).

*Habrá que simular algunas de las tareas, ya que no tenemos una base de datos*
*Como actividad avanzada, puedes guardar y leer desde un archivo de texto*

**PISTAS**

- ¿Has usando el metodo 'includes' de string?

- ¿Has utilizado las funciones de filter sobre un array?

```javascript
// Lógica para filtrar tareas pendientes
const pendingTasks = tasks.filter(task => !task.completed);
```

```javascript
// 
const userStories = [
  {
    id: 1,
    nombre: "juan",
    descripcion: "Como un developer, quiero registrar una historia de usuario para organizar las tareas del proyecto.",
    prioridad: 1,
    estado: "Pendiente"
  },
  {
    id: 2,
    nombre: "maria",
    descripcion: "Como un manager, quiero ver todas las tareas pendientes para asignarlas a los miembros del equipo.",
    prioridad: 2,
    estado: "Pendiente"
  }, ...
```

## Requisitos Mínimos del Proyecto
**Usar Express y EJS:**
- Debes crear una aplicación web utilizando Express como servidor backend.
- Utiliza EJS para el renderizado de las vistas (y parciales).
- Incluir ejemplos de estructuras de control como if y for en las plantillas EJS.

**Incluir Validación en Cliente y Servidor:**

- Implementa validación en el lado del cliente usando JavaScript (por ejemplo, con eventos submit en formularios).
- Implementa validación en el servidor utilizando Express (puedes usar un middleware como express-validator o validación manual en las rutas).
- La validación debe incluir, al menos, verificar campos obligatorios, formato de datos, y lógica simple como validar si un campo es un número o una cadena de texto.

**Usar GitHub para Entregar el Proyecto:**

- El proyecto debe ser entregado en un repositorio de GitHub.
Asegúrate de subir el código fuente, configuraciones y demás archivos del proyecto.
- Incluir un README

