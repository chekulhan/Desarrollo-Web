https://www.youtube.com/watch?v=eiC58R16hb8

El Event Loop (bucle de eventos) es el mecanismo de JavaScript que permite manejar operaciones asíncronas y garantizar que el código no bloquea el hilo principal.

Como JavaScript es single-threaded (un solo hilo de ejecución), necesita una forma eficiente de gestionar múltiples tareas sin que unas bloqueen a otras. Aquí es donde entra en juego el Event Loop.

1. JavaScript ejecuta el código síncrono en la pila de ejecución (Call Stack).
2. Si encuentra una tarea asíncrona (como setTimeout(), fetch(), XMLHttpRequest o una promesa):
- Se delega la tarea al navegador o Node.js.
- Cuando la tarea termina, se envía su callback a una cola:
    - Microtask Queue (para promesas, MutationObserver, etc.). (cola micro)
    - Macrotask Queue (para setTimeout, setInterval, eventos del DOM, etc.). (cola macro)
3. El Event Loop verifica si la pila está vacía y va sacando tareas de las colas:
- Primero ejecuta todas las microtareas pendientes.
- Luego ejecuta una macrotarea.
- Repite el proceso.



## Diferencia entre Microtareas y Macrotareas

| **Tipo**                     | **Ejemplos**                                      | **Cuándo se ejecutan**                                                   |
|------------------------------|--------------------------------------------------|-------------------------------------------------------------------------|
| **Microtareas (Microtask Queue)** | `Promise.then()`, `MutationObserver`              | Antes de las macrotareas, justo después del código síncrono.           |
| **Macrotareas (Task Queue)**  | `setTimeout`, `setInterval`, `XMLHttpRequest`, `navigator.geolocation` | Después de todas las microtareas y cuando la pila de ejecución está vacía. |


💡 Regla general:
👉 Si usa Promise.then(), es una microtarea.
👉 Si es un temporizador (setTimeout, setInterval) o una API de navegador (XHR, Geolocalización), es una macrotarea.