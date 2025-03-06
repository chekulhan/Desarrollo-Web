# Mini proyecto
COMO empleado de la empresa, QUIERO ver y gestionar mis tareas, PARA poder mantenerme organizado y cumplir con mis plazos de entrega.

**Objetivos del Proyecto:**
- Practicar la creación de rutas y manejo de datos en el servidor usando Express.
- Utilizar EJS para mostrar dinámicamente las tareas en el navegador.
- Aplicar lógica de negocio en el servidor para categorizar y manejar tareas y en el cliente.
- Realizar validaciones en el servidor y en el cliente para garantizar la integridad de los datos.


**Tareas:**

- Mostrar una lista de tareas: El estudiante deberá mostrar una lista de tareas en una página usando EJS. Las tareas deben incluir la descripción, fecha de vencimiento y prioridad.

- Categorizar las tareas: El estudiante debe categorizar las tareas en función de su estado (pendiente o completada). Deben ser filtradas y mostradas de manera adecuada. Por ejemplo, en una TABLE mostrar las tareas pendientes. En otra, las tareas completadas.

- Cambiar el estado de las tareas: Se debe implementar una lógica para permitir a los usuarios cambiar el estado de una tarea (de pendiente a completada). Esto debe reflejarse en la interfaz de usuario.

- Validación de formulario: Al agregar una nueva tarea, el estudiante debe asegurarse de que los campos obligatorios estén completos y que la fecha de vencimiento no sea en el pasado.

- Mostrar tareas según la fecha: Las tareas deben ser mostradas y agrupadas según su fecha de vencimiento (hoy, más tarde, vencidas).

*Habrá que simular algunas de las tareas, ya que no tenemos una base de datos*
*Como actividad avanzada, puedes guardar y leer desde un archivo de texto*

**PISTAS**
- ¿Has utilizado las funciones de filter sobre un array?

```javascript
// Lógica para filtrar tareas pendientes
const pendingTasks = tasks.filter(task => !task.completed);
```