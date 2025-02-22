# React
## Historia de React
React es una biblioteca de JavaScript para construir interfaces de usuario, creada por Facebook en 2011. La historia de React se puede resumir en los siguientes hitos clave:

Creación (2011): React fue desarrollado por Jordan Walke, un ingeniero de software en Facebook. Inicialmente se usó en el feed de noticias de Facebook y, posteriormente, se implementó en Instagram.

Lanzamiento Público (2013): React fue lanzado como un proyecto de código abierto en mayo de 2013. Este lanzamiento permitió a la comunidad de desarrolladores contribuir al proyecto y mejorar la biblioteca.

Popularidad: Con el tiempo, React ganó popularidad debido a su enfoque en el rendimiento y la facilidad de uso, lo que llevó a una adopción masiva en la industria del desarrollo web.

Ecosistema en Crecimiento: A medida que React se expandió, se desarrollaron muchas bibliotecas y herramientas complementarias, como React Router para el enrutamiento y Redux para la gestión del estado.

Versiones y Mejoras: React ha tenido múltiples versiones desde su lanzamiento, incorporando nuevas características como Hooks en React 16.8, que permiten gestionar el estado y los efectos secundarios de manera más sencilla en los componentes funcionales.

## Configuración Básica para Crear un Proyecto Simple con React
Para crear un proyecto básico de React, sigue estos pasos:

1. Instalar Node.js y npm
Asegúrate de tener Node.js instalado en tu máquina. Puedes descargarlo desde nodejs.org. npm (Node Package Manager) se incluye con Node.js.

2. Crear un Nuevo Proyecto con Create React App
Usa el siguiente comando para crear un nuevo proyecto de React:

```bash
npx create-react-app mi-proyecto-react
```

Esto creará una nueva carpeta llamada mi-proyecto-react con la estructura básica del proyecto.

3. Navegar al Directorio del Proyecto
```bash
cd mi-proyecto-react
```

4. Iniciar el Servidor de Desarrollo
Ejecuta el siguiente comando para iniciar el servidor:

```bash
npm start
````

Esto abrirá tu aplicación en http://localhost:3000.

## Estructura de un Proyecto de React
Después de crear el proyecto, tendrás la siguiente estructura de carpetas y archivos:

```php
mi-proyecto-react/
├── node_modules/            # Dependencias del proyecto
├── public/                  # Archivos públicos
│   ├── favicon.ico          # Icono de la aplicación
│   ├── index.html           # Archivo HTML principal
│   └── manifest.json        # Configuración del manifiesto
├── src/                     # Código fuente de la aplicación
│   ├── App.css              # Estilos para el componente App
│   ├── App.js               # Componente principal de la aplicación
│   ├── index.css            # Estilos globales
│   ├── index.js             # Archivo de entrada de JavaScript
│   └── logo.svg             # Logo de la aplicación
├── .gitignore               # Archivos que Git debe ignorar
├── package.json             # Configuración y dependencias del proyecto
└── README.md                # Documentación del proyecto
``

## Explicación de la Estructura
- public/: Contiene archivos estáticos que se sirven directamente. El archivo index.html es el punto de entrada para la aplicación.
- src/: Aquí se encuentra el código fuente de la aplicación. Los componentes de React se crean y se organizan en esta carpeta.
- App.js: Este archivo es el componente principal donde se define la interfaz de usuario inicial de la aplicación.
- index.js: Este archivo es el punto de entrada de la aplicación donde se renderiza el componente App en el DOM.

## Conclusión
Con esta configuración básica y la estructura de proyecto de React, puedes comenzar a desarrollar tu aplicación. A medida que avances, puedes explorar más características y herramientas para mejorar tu flujo de trabajo y optimizar tu aplicación.




# Webpack y Babel al Ejecutar npm start
Webpack y Babel son herramientas fundamentales en el desarrollo de aplicaciones React, y su configuración se puede encontrar en el archivo package.json del proyecto. A continuación, te explico cómo se relacionan estas herramientas y cómo puedes ver su configuración.

## Webpack
Función de Webpack:

Webpack es un empaquetador de módulos que agrupa todos los recursos de tu aplicación (JavaScript, CSS, imágenes) y los convierte en un o varios archivos optimizados.
Configuración en package.json:

Cuando ejecutas el comando npm start, este invoca un script definido en el package.json. Por lo general, verás algo como esto:
```json
"scripts": {
    "start": "react-scripts start"
}
```

Aquí, react-scripts es una herramienta que abstrae la configuración de Webpack. No verás la configuración de Webpack directamente, ya que está oculta dentro de la dependencia react-scripts, pero puedes explorar cómo funciona revisando la documentación de Create React App o la fuente de react-scripts.

## Babel
Función de Babel:

Babel es un transpilador que convierte el código JavaScript moderno en una versión que todos los navegadores pueden entender. Esto incluye la conversión de sintaxis ES6 y JSX a ES5.
Configuración en package.json:

La configuración de Babel no se muestra directamente en package.json, pero al usar react-scripts, Babel se configura automáticamente con los presets necesarios.
Si quisieras personalizar la configuración de Babel, podrías crear un archivo .babelrc o babel.config.json en la raíz de tu proyecto. Aquí tienes un ejemplo simple de cómo podría lucir:
```json
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Mirar el Archivo package.json
Para entender mejor cómo se configuran Webpack y Babel, puedes abrir el archivo package.json en la raíz de tu proyecto y examinar la sección scripts. Esto te mostrará qué comandos están disponibles y qué se ejecuta cuando llamas a npm start.

Por ejemplo:

```json
{
  "name": "mi-aplicacion",
  "version": "0.1.0",
  "private": true,
  "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
  },
  "dependencies": {
      "react": "^17.0.2",
      "react-dom": "^17.0.2",
      "react-scripts": "4.0.3"
  },
  "devDependencies": {}
}
```

En este ejemplo:

start: Ejecuta el servidor de desarrollo.
build: Genera una versión de producción optimizada.
test: Ejecuta pruebas de unidad.
eject: Permite acceder a la configuración de Webpack y Babel, lo que puede ser útil si deseas personalizar la configuración.
Resumen
Webpack y Babel son esenciales para el desarrollo de aplicaciones React.
Puedes revisar la configuración y los scripts disponibles en el archivo package.json para entender cómo funcionan al ejecutar npm start.
Aunque la configuración de Webpack y Babel está oculta dentro de react-scripts, puedes personalizar Babel creando un archivo de configuración adicional si es necesario.