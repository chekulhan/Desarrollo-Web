# Cross-Site Scripting (XSS)
Cross-Site Scripting (XSS) es un tipo de vulnerabilidad de seguridad en aplicaciones web que permite a un atacante inyectar código malicioso en páginas web vistas por otros usuarios. Esto puede ocurrir cuando una aplicación web no valida correctamente los datos introducidos por los usuarios antes de mostrarlos en el navegador.

**Cómo funciona XSS:**
- Un atacante inserta código JavaScript malicioso en un formulario o en una URL de una página web.
- Cuando otro usuario visita la página web comprometida, el código JavaScript malicioso se ejecuta en su navegador como si fuera parte del contenido legítimo.
- Esto puede permitir al atacante robar cookies, secuestrar sesiones de usuario, redirigir al usuario a sitios web maliciosos o realizar otras acciones no deseadas.

**Tipos de XSS:**
- Reflected XSS: El código malicioso se refleja inmediatamente en la página web después de ser enviado, generalmente a través de una URL. El ataque se realiza cuando el usuario hace clic en un enlace malicioso.
- Stored XSS: El código malicioso se almacena en el servidor y se ejecuta cuando otros usuarios acceden a la página web comprometida. Este es más peligroso porque el código se ejecutará cada vez que la página afectada sea cargada.
- DOM-based XSS: El código malicioso manipula el Documento Object Model (DOM) en el navegador, cambiando cómo se muestra la página.

**Prevención de XSS:**
- Escapar caracteres especiales: Se deben escapar los caracteres como <, >, y & en entradas de usuario para evitar que se interpreten como código HTML o JavaScript.
- Validación y filtrado: Asegurarse de validar y filtrar todas las entradas del usuario.
- Uso de Content Security Policy (CSP): Configurar políticas de seguridad de contenido para restringir las fuentes de código ejecutable.

## Actividades
---

Cross-Origin Resource Sharing (CORS)
Cross-Origin Resource Sharing (CORS) es un mecanismo de seguridad que permite a los navegadores hacer solicitudes HTTP a dominios diferentes al dominio de origen (es decir, de otro servidor o API) de forma controlada.

Problema que resuelve CORS:
Por razones de seguridad, los navegadores implementan la política de mismo origen (Same-Origin Policy), que impide que un sitio web haga solicitudes a otro dominio diferente al que lo originó. Sin embargo, en ciertos casos, como en el uso de APIs de terceros o la carga de recursos desde diferentes dominios, se necesita permitir esas solicitudes.

CORS permite que el servidor especifique qué orígenes (dominios) tienen permiso para acceder a sus recursos. De esta manera, se evita que sitios maliciosos accedan a datos sensibles de otro dominio.

¿Cómo funciona CORS?
Cuando el navegador realiza una solicitud a un dominio diferente (una solicitud cross-origin), el servidor debe incluir ciertos encabezados HTTP en su respuesta para permitir que la solicitud se complete correctamente. El servidor indica que el recurso puede ser compartido con orígenes específicos.

Ejemplo de los encabezados CORS:

Access-Control-Allow-Origin: Especifica qué orígenes tienen permiso para acceder al recurso. Por ejemplo, un servidor puede incluir el encabezado:

http
Copiar
Editar
Access-Control-Allow-Origin: https://example.com
Esto significa que solo las solicitudes provenientes de https://example.com pueden acceder al recurso.

Access-Control-Allow-Methods: Indica qué métodos HTTP son permitidos (GET, POST, PUT, DELETE, etc.).

Access-Control-Allow-Headers: Especifica qué encabezados pueden ser utilizados en la solicitud.

Preflight Request (Solicitud de Pre-vuelo):
En algunos casos, cuando la solicitud involucra ciertos métodos HTTP (como PUT o DELETE) o encabezados personalizados, el navegador envía una preflight request antes de la solicitud real. Esta es una solicitud OPTIONS al servidor para verificar si la solicitud real es segura. Si la respuesta a la pre-vuelo es positiva, el navegador procederá a realizar la solicitud real.

Ejemplo de CORS:
Imagina que tienes una aplicación web que hace una solicitud GET a una API alojada en un servidor diferente. El servidor de la API debe incluir los encabezados CORS adecuados para permitir que la solicitud sea exitosa:

http
Copiar
Editar
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST
Prevención de problemas con CORS:
Control de acceso adecuado: El servidor debe asegurarse de que solo permita solicitudes de orígenes de confianza.
Uso de preflight requests: Asegúrate de que las solicitudes complejas (como las que usan métodos distintos de GET/POST) sean gestionadas adecuadamente.
