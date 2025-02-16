# Diferencias entre CommonJS y ECMAScript Modules (ESM)

## 1. Diferencias entre CommonJS y ECMAScript Modules (ESM)

### **CommonJS:**
- **CommonJS** es el sistema de módulos tradicional de **Node.js**.
- Usa la palabra clave `require()` para cargar módulos.
- Usa `module.exports` para **exportar** funcionalidades de un módulo.
- **Es síncrono**, lo que significa que carga los módulos de forma secuencial, esperando que cada módulo se cargue antes de continuar.

**Ejemplo de CommonJS:**

```javascript
// sum.js (módulo)
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// app.js (código principal)
const sum = require('./sum');
console.log(sum(2, 3)); // Imprime 5
```


### **ECMAScript Modules (ESM):**
ESM es el sistema de módulos que sigue el estándar de ECMAScript.
Usa las palabras clave import y export para trabajar con módulos.
Es asincrónico, lo que permite que los módulos se carguen de manera más eficiente en navegadores y en Node.js (a partir de versiones recientes).
Está disponible en Node.js desde la versión 12, pero en versiones más recientes (como la 14 en adelante) es más estable.

**Ejemplo de ESM:**

```javascript
// sum.js (módulo)
export function sum(a, b) {
  return a + b;
}

// app.js (código principal)
import { sum } from './sum.js';
console.log(sum(2, 3)); // Imprime 5
```


**2. ¿Cómo usar módulos en Node.js con package.json?**
Paso 1: Crear el archivo package.json
El archivo package.json es esencial para gestionar dependencias y configuraciones de tu proyecto. Además, es necesario para habilitar los ES Modules en Node.js.

Para crear un package.json, abre tu terminal y navega a la carpeta del proyecto.
Ejecuta el siguiente comando:

```bash
npm init -y
```
Esto creará un archivo package.json con la configuración predeterminada.

**Paso 2: Incluir "type": "module" en package.json**
Para usar ES Modules en tu proyecto, necesitas indicar que tu proyecto usará esta sintaxis. Para ello, agrega "type": "module" en el archivo package.json.

Ejemplo de archivo package.json con type: module:

```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "type": "module",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
Paso 3: Crear y usar módulos con import y export
Después de configurar el archivo package.json, puedes usar la sintaxis de ES Modules en tu código:

Ejemplo de cómo importar y exportar módulos:

Archivo sum.js (exportando una función):

```javascript

// sum.js
export function sum(a, b) {
  return a + b;
}
```

Archivo app.js (importando la función):

```javascript
// app.js
import { sum } from './sum.js';
console.log(sum(2, 3)); // Imprime 5
```


Los módulos **ECMAScript (ESM)** son la forma recomendada y moderna de manejar las importaciones y exportaciones de módulos en JavaScript. Es el estándar oficial para gestionar módulos en JavaScript, y es el enfoque que cada vez se está adoptando más tanto en Node.js como en los navegadores web.

```javascript
// Importing a function or variable from another file
import { myFunction } from './myModule.js';

// Exporting a function or variable
export function myFunction() {
  // code
}
```
