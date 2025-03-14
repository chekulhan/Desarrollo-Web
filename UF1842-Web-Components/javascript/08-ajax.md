# AJAX

https://www.youtube.com/watch?v=qJT2FY1jjjE  (ver en partes, la primera parte de AJAX)

**AJAX (Asynchronous JavaScript and XML)** es una técnica de desarrollo web que permite crear aplicaciones más interactivas y dinámicas, sin tener que recargar la página web por completo. La creación de AJAX no fue el trabajo de una sola persona o una sola tecnología, sino que fue el resultado de la combinación de varias tecnologías que ya existían. A continuación, te explico el origen y la evolución de AJAX:

1. Las Tecnologías Involucradas:
AJAX es una combinación de varias tecnologías, que, al ser utilizadas en conjunto, permiten la carga de datos asíncrona sin recargar la página. Estas tecnologías son:

- HTML/XHTML: Se utiliza para la estructura y el contenido de la página.
- CSS: Se usa para la presentación y estilo visual.
- JavaScript: La clave de la interactividad, permite manejar las solicitudes y respuestas del servidor sin recargar la página.
- DOM (Document Object Model): Permite actualizar dinámicamente partes del HTML de la página sin tener que recargarla.
- XMLHttpRequest: Es el objeto clave que permite realizar solicitudes HTTP asíncronas a un servidor sin recargar la página.

2. Los Primeros Pasos:
La base de AJAX tiene sus raíces en 1998, cuando Microsoft desarrolló el objeto *XMLHttpRequest* en Internet Explorer 5 (IE5) como una forma de permitir la comunicación entre el cliente (navegador) y el servidor de manera asíncrona. Este objeto permitió que una página web pudiera solicitar datos del servidor y actualizar su contenido sin tener que recargar toda la página.

La funcionalidad básica de XMLHttpRequest era permitir que los datos se enviaran y recibieran en segundo plano sin interrumpir la interacción del usuario con la página web. Aunque inicialmente se utilizaba principalmente para obtener y enviar datos en formato XML, rápidamente se dio cuenta que también se podía utilizar para recibir otros tipos de datos como JSON o texto plano.


## Historia de XMLHttpRequest y sus principios
1. Origen: XMLHttpRequest (XHR) fue desarrollado por Microsoft en 1999 para facilitar la creación de aplicaciones web interactivas en su navegador Internet Explorer. Fue inicialmente diseñado para permitir la comunicación entre el cliente (el navegador) y el servidor de manera asíncrona, sin necesidad de recargar toda la página.

El objetivo principal era enviar y recibir datos desde el servidor de manera asíncrona (es decir, sin bloquear la interfaz de usuario), lo que permitió mejorar la experiencia de usuario y la interactividad de las aplicaciones web.

2. Función inicial: Originalmente, XMLHttpRequest fue diseñado para realizar solicitudes que devolvieran datos XML desde el servidor, de ahí su nombre. El propósito era que los desarrolladores pudieran cargar datos dinámicos sin tener que recargar la página completa.

3. Evolución: Aunque originalmente su uso estaba centrado en el intercambio de datos en formato XML, con el tiempo los desarrolladores comenzaron a usarlo para recibir y enviar datos en otros formatos, como JSON y texto plano. Esto permitió el desarrollo de aplicaciones web más dinámicas, como lo que hoy conocemos como aplicaciones de una sola página (SPA).

Principios de XMLHttpRequest:
Asincronía: Uno de los principios clave de XMLHttpRequest es su capacidad para realizar solicitudes asíncronas. Esto significa que el navegador puede seguir funcionando y actualizando su interfaz mientras espera la respuesta del servidor, sin que el usuario note ningún retraso o congelamiento.

Interacción cliente-servidor sin recargar la página: XMLHttpRequest permite enviar y recibir datos entre el cliente (navegador) y el servidor sin necesidad de recargar la página. Esto da lugar a aplicaciones más interactivas y rápidas.

Formatos de datos flexibles: Inicialmente centrado en XML, se fue adaptando para admitir otros tipos de datos como JSON, HTML y texto plano, lo que incrementó su versatilidad.

Eventos de estado (State Change): XMLHttpRequest sigue una serie de estados (que se pueden observar a través de su propiedad readyState). Esto permite a los desarrolladores saber en qué etapa se encuentra la solicitud, como si se está enviando, recibiendo o completando.

Desventajas de XMLHttpRequest en la actualidad:
Aunque XMLHttpRequest fue una tecnología revolucionaria en su tiempo, hoy en día presenta varias limitaciones frente a alternativas más modernas. Algunas de las desventajas son:

## Sintaxis y complejidad:

XMLHttpRequest es más complejo en cuanto a su sintaxis y uso. Por ejemplo, las funciones de manejo de eventos no son tan intuitivas, y para realizar solicitudes simples se necesita más código en comparación con alternativas como fetch.
El uso de callbacks puede llevar a problemas como el callback hell (infierno de los callbacks), donde anidar múltiples funciones puede dificultar la lectura y mantenimiento del código.
Manejo de Promesas:

A diferencia de la función moderna fetch, que utiliza promesas, XMLHttpRequest no está diseñado para trabajar con ellas, lo que hace que el manejo de errores y la gestión de flujos asincrónicos sea más engorroso.
CORS (Cross-Origin Resource Sharing):

XMLHttpRequest tiene restricciones en cuanto a CORS, lo que puede ser problemático cuando se realiza solicitudes a servidores en otros dominios. Si bien esto puede controlarse mediante cabeceras específicas en el servidor, a veces es difícil de manejar y configurar correctamente.
Compatibilidad:

Aunque XMLHttpRequest es ampliamente compatible con muchos navegadores, en aplicaciones modernas y complejas, los desarrolladores prefieren trabajar con soluciones más nuevas como fetch, que simplifican el código y mejoran la compatibilidad en la mayoría de los navegadores.
No manejo de streams o datos binarios:

XMLHttpRequest tiene un soporte limitado para trabajar con datos binarios o streams de forma eficiente. Aunque se pueden enviar datos binarios mediante XMLHttpRequest, no es tan sencillo como con el objeto fetch, que maneja de manera más adecuada los flujos de datos y permite trabajar con streams de manera eficiente.

