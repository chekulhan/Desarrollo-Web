# Full Stack Developer

![cliente-servidor](/x-assets/fullstack.png)

# Actividad 1:

Colocar los siguientes acciones en uno de las categorías:
🖥️ Desarrollo Frontend
⚙️ Desarrollo Backend
📱 Desarrollo de Apps Móviles
🗄️ Bases de Datos y DevOps
🛠️ GitHub y Metodologías Ágiles


- Crear un botón interactivo usando React.js
- Diseñar una página de inicio de sesión con HTML, CSS y JavaScript
- Construir una barra de navegación responsive con Material UI (MUI)
- Organizar una sesión de planificación de sprint en Agile
- Crear una pantalla de inicio usando React Native
- Escribir una función en Python (FastAPI) que devuelva datos en JSON
- Configurar una pipeline de CI/CD para una aplicación web
- Implementar un modo oscuro en una aplicación web
- Mejorar la accesibilidad web (roles ARIA, texto alternativo, navegación con teclado)
- Diseñar un esquema de base de datos relacional para una plataforma de blogs
- Usar AWS Lambda para procesar datos de usuarios
- Animar elementos de la interfaz con transiciones CSS y JavaScript
- Crear un nuevo repositorio y hacer push del código en GitHub
- Enviar un correo electrónico cuando un usuario envíe un formulario de contacto
- Escribir una consulta en SQL para obtener todos los usuarios de una tabla
- Escribir un archivo README claro para un proyecto


# Actividad 2:
Con un compañero, dar un rating de 1 (poco) a 5 (mucho) de tus habilidades blandas

🤝 Habilidades Blandas (Soft Skills) de un Full Stack Developer

1. Resolución de Problemas → Capacidad de encontrar soluciones eficientes a errores y problemas técnicos.

2. Aprendizaje Continuo → Mantenerse actualizado con nuevas tecnologías y frameworks.

3. Trabajo en Equipo → Colaborar con diseñadores, otros desarrolladores y equipos de negocio.

4. Comunicación Efectiva → Explicar ideas técnicas de forma clara a colegas no técnicos.

5. Gestión del Tiempo → Organizar tareas para cumplir deadlines en sprints ágiles.

6. Pensamiento Crítico → Evaluar diferentes enfoques antes de tomar decisiones técnicas.

7. Adaptabilidad → Capacidad de cambiar y aprender nuevas tecnologías según las necesidades del proyecto.

8. Empatía y Atención al Usuario → Diseñar soluciones pensando en la experiencia del usuario final.

9. Atención al Detalle → Minimizar errores en código y mejorar la calidad del software.

10. Capacidad de Documentación → Escribir documentación clara en Confluence, Notion o README en GitHub.


# Aplicaciones Web (Dinámicas)

Un sitio dinámico es aquél en que algun contenido de la respuesta está generado dinámicamente sólo cuando se necesita. En un sitio web dinámico las páginas HTML se crean normalmente insertando datos desde una base en variables dentro de plantillas HTML (esta es una forma mucho más eficiente de almacenar gran cantidad de contenido que la que usan los sitios web estáticos). Un sitio dinámico puede devolver datos diferentes para un URL basados en la información proporcionada por el usuario o sus preferencias almacenadas y puede realizar otras operaciones como parte de la devolución de respuesta (ej, enviar notificaciones).

La mayor parte del código para soportar un sitio web dinámico debe correr en el servidor. La creación de este código se conoce como "programación de lado-servidor" (o algunas veces "back-end scripting").


El diagrama de abajo muestra los elementos principales del sitio web del "entrenador del equipo", junto con etiquetas numeradas de la secuencia de operaciones cuando el entrenador accede a su lista de "mejor equipo". Las partes del sitio que lo hacen dinámico son las Aplicaciones Web (que es como llamaremos al código del lado servidor que procesa las peticiones HTTP y devuelve respuestas HTTP), la Base de Datos, que contiene la información sobre los jugadores, equipos, entrenadores y sus relaciones, y las Plantillas HTML.

![cliente-servidor](/x-assets/webapp.png)

Después de que el entrenador envíe el formulario con el nombre del equipo y el número de jugadores, la secuencia de operaciones es la siguiente:

1. El explorador web crea una petición HTTP GET al servidor usando la URL base del recurso (/best) y codifica el equipo y número de jugadores como parámetros URL (ej. /best?team=my_team_name&show=11) o formando parte de un patrón URL (ej. /best/my_team_name/11/). Se usa una petición GET porque la petición sólo recoge datos (no modifica ninguno).
2. El Servidor Web detecta que la petición es "dinámica" y la reenvía a la Aplicación para que la procese (el servidor web determina como manejar diferentes URLs basándose en reglas de emparejamiento de patrones definidas en su configuración).
3. La Aplicación Web identifica que la intención de la petición es obtener la "lista del mejor equipo" basándose en la URL (/best/) y encuentra el nombre del equipo y el número de jugadores requeridos a partir de la URL. La Aplicación Web obtiene entonces la información solicitada de la base de datos (usando parámetros "internos" adicionales que definen qué jugadores son los "mejores", y posiblemente también obteniendo la identidad del entrenador que ha iniciado sesión a partir de un cookie del lado cliente).
4. La Aplicación Web crea dinámicamente una página HTML por medio de colocar los datos (de la base) en marcadores de posición dentro de la plantilla HTML.
5. La Aplicación Web devuelve el HTML generado al explorador web (via el Servidor Web), junto con un código de estado HTTP de 200 ("éxito"). Si algo impide que se pueda devolver el HTML entonces la Aplicación Web devolverá otro código — por ejemplo "404" para indicar que el equipo no existe.
6. El Explorador Web comenzará a continuación a procesar el HTML devuelto, enviando peticiones separadas para obtener cualquier otro fichero CSS o JavaScript que sea referenciado (ver paso 7).
7. El Servidor Web carga ficheros estáticos del sistema de ficheros y los devuelve al explorador directamente (de nuevo, la gestión correcta de los ficheros está basada en las reglas de configuración y de emparejamiento de patrones URL).

La operación de actualizar un registro de la base de datos se gestionaría de forma similar, excepto que, como para cualquier actualización de la base de datos, la petición HTTP desde el explorador debería ser codificada como petición POST.

# Referencias
- https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview