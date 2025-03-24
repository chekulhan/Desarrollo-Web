# Seguridad en el navegador
## oWASP
https://owasp.org/www-project-top-ten/

## Cross-Site Scripting (XSS)
Cross-Site Scripting (XSS) es un tipo de vulnerabilidad de seguridad en aplicaciones web que permite a los atacantes inyectar scripts maliciosos en las páginas vistas por otros usuarios. Estos scripts pueden ser ejecutados en el navegador de la víctima, lo que les permite realizar diversas acciones maliciosas, como robar cookies, redirigir a los usuarios a sitios falsos o realizar acciones no autorizadas en su nombre.

Tipos comunes de XSS:

**Reflected XSS**: Se produce cuando el código malicioso se inyecta en una URL o en una solicitud HTTP (por ejemplo, un formulario de búsqueda) y se refleja inmediatamente en la respuesta del servidor.

**Stored XSS**: En este caso, el código malicioso se almacena en el servidor, por ejemplo, en una base de datos o en un sistema de comentarios. Luego, cuando otros usuarios visitan la página afectada, el script se ejecuta.

**DOM-based XSS**: Sucede cuando el código malicioso es inyectado en el lado del cliente mediante la manipulación del Document Object Model (DOM), sin que el servidor intervenga directamente.



## Content Security Policy (CSP)
Content Security Policy (CSP) es una capa de seguridad que ayuda a detectar y mitigar ciertos tipos de ataques, incluyendo XSS, mediante la especificación de qué contenido puede cargarse y ejecutarse en una página web. CSP es una política de seguridad que los navegadores pueden implementar para bloquear recursos no confiables, como scripts, imágenes, fuentes, etc.

La idea detrás de CSP es establecer restricciones sobre qué fuentes de contenido pueden ser ejecutadas, y bloquear todas las demás, lo que limita las posibilidades de un ataque exitoso de XSS.

¿Cómo funciona CSP?

- Un servidor web establece una política CSP enviando una cabecera HTTP Content-Security-Policy con un conjunto de directivas que especifican las fuentes de confianza para los distintos tipos de contenido (por ejemplo, scripts, imágenes, estilos, etc.).
- Si un navegador recibe esta política, solo permitirá cargar recursos desde las fuentes especificadas y bloqueará los que no cumplan con la política.

```http
Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com; style-src 'self';

```

Beneficios de usar CSP:

- Prevención de XSS: Impide que se ejecuten scripts maliciosos que no provienen de fuentes de confianza.
- Reducción de ataques de inyección: Protege contra varios tipos de inyecciones (como inyecciones de código JavaScript malicioso).
- Mejor control sobre los recursos cargados: Permite bloquear fuentes no autorizadas y no confiables.

Ejemplo de Express como middleware:
```bash
npm install react-helmet-async
```

```javascript
const express = require("express");
const helmet = require("helmet");

const app = express();

// Habilitar Helmet con CSP configurado
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://apis.google.com"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "https://images.example.com"],
      },
    },
  })
);

app.get("/", (req, res) => {
  res.send("<h1>Aplicación segura con Helmet</h1>");
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));

```

Ejemplos de directivas:
```javascript
directives: {
      defaultSrc: ["'self'"],  // Allow loading resources from the same origin
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],  // Allow inline scripts and eval (caution)
      objectSrc: ["'none'"],  // Disallow Flash and other plugins
      styleSrc: ["'self'", "'unsafe-inline'"],  // Allow inline styles
      imgSrc: ["'self'"],
      connectSrc: ["'self'", "https://api.example.com"],  // Allow connections to this API
      // Add more directives as needed
    },
```


## Resumen
- XSS es una vulnerabilidad que permite ejecutar código malicioso en el navegador del usuario, mientras que CSP es una medida de seguridad que ayuda a prevenir la ejecución de ese código malicioso al restringir las fuentes desde las que se pueden cargar los scripts y otros recursos.
- Al implementar CSP, puedes mitigar los riesgos asociados con XSS al especificar qué scripts son seguros para ejecutarse y bloquear los que no lo son. En React, solo hay que cumplir las normas / directivas, no hace falta hace cambios en el código

## Recomendaciones
- Validar y sanitizar los datos del usuario: Asegúrate de que cualquier entrada del usuario sea filtrada para evitar que inyecte código malicioso.
- Usar dangerouslySetInnerHTML con precaución en React: Si necesitas usar dangerouslySetInnerHTML, asegúrate de sanitizar el contenido antes de inyectarlo en el DOM.
- Implementar CSP en tu servidor: Configura una política CSP que restrinja las fuentes de contenido y proteja tu aplicación contra ataques XSS.
- Evitar el uso de eval(): El uso de eval() permite ejecutar código JavaScript dinámicamente y puede facilitar los ataques XSS. Evítalo siempre que sea posible.

React usa escapeHTML() automaticamente, para convertir los caracteres en:
Character	Escaped Version
<	&lt;
>	&gt;
&	&amp;
"	&quot;
'	&#39;

## Actividades

### Eval()
En la console, ejecutar el siguiente código:
```javascript
const code = "window.alert('Peligroso')";
console.log(eval(code)); 
```

### dangerouslySetInnerHTML
Implementar este componente. ¿Porqué esta usando 'dangerouslySetInnerHTML'?
```jsx
import React from "react";

function HtmlDisplay() {
  const rawHtml = "<h2 style='color:blue'>Hola</h2><p>Este texto es <strong>bold</strong>.</p>";

  return (
    <div>
      <h1>Displaying Raw HTML</h1>
      <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </div>
  );
}

export default HtmlDisplay;
```

### Sanitización con DOMPurify
DOMPurify es una biblioteca que elimina automáticamente scripts maliciosos y protege contra ataques XSS.

- DOMPurify escanea y limpia el contenido del usuario.
- Si alguien intenta inyectar `<script>alert('XSS')</script>`, DOMPurify lo elimina automáticamente.
- Protege el dangerouslySetInnerHTML, permitiendo solo contenido seguro.

Instalar el módulo:
```bash
npm install dompurify
```

Implementar este componente:

```jsx
import React, { useState } from "react";
import DOMPurify from "dompurify";

function SanitizeInputDOMPurify() {
  const [input, setInput] = useState("");
  const [safeHtml, setSafeHtml] = useState("");

  const handleSubmit = () => {
    const sanitizedHtml = DOMPurify.sanitize(input); // Limpia el HTML
    setSafeHtml(sanitizedHtml);
  };

  return (
    <div>
      <h1>Sanitización con DOMPurify</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe algo aquí..."
      />
      <button onClick={handleSubmit}>Mostrar HTML Seguro</button>

      <h2>Salida:</h2>
      <div dangerouslySetInnerHTML={{ __html: safeHtml }} />
    </div>
  );
}

export default SanitizeInputDOMPurify;


```


# SQL Inyeccion vs XSS
La diferencia principal entre inyección SQL (SQL Injection) y Cross-Site Scripting (XSS) radica en el objetivo y el impacto del ataque:

1. Inyección SQL (SQLi)

Objetivo: Ataca la base de datos del servidor.

Cómo funciona: El atacante inserta código SQL malicioso en una consulta para manipular la base de datos.

Consecuencias: Robo de datos, manipulación o eliminación de información, acceso no autorizado.

Ejemplo:
```sql
SELECT * FROM users WHERE username = 'admin' OR '1'='1' -- ' AND password = 'password';
```
Esto podría permitir el acceso sin conocer la contraseña real.

2. Cross-Site Scripting (XSS)

Objetivo: Ataca a los usuarios del sitio web inyectando scripts maliciosos.

Cómo funciona: Se introduce código JavaScript en una página web para ejecutar acciones en el navegador de la víctima.

Consecuencias: Robo de cookies, secuestro de sesiones, redirección a sitios maliciosos.

Ejemplo:
```javascript
<script>alert('Hacked!');</script>
```
Si un campo de entrada no está sanitizado, esto puede ejecutarse en el navegador de otros usuarios.

**Diferencias clave**

Ambos ataques se pueden prevenir validando y sanitizando correctamente las entradas del usuario.