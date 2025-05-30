# Swagger y OpenAPI

## ¿Qué es OpenAPI?
OpenAPI es una especificación estándar para definir APIs RESTful. Describe la estructura de tu API — los endpoints, los formatos de las peticiones y respuestas, autenticación, y más — en un formato que puede ser leído tanto por humanos como por máquinas (normalmente en JSON o YAML).

Antes se conocía como Swagger Specification, pero ahora es un estándar abierto bajo la Linux Foundation.

**Puntos clave sobre OpenAPI**
- Independiente del lenguaje: Puedes usarlo con cualquier lenguaje de programación o framework.

- Legible para humanos y máquinas: Los desarrolladores pueden entenderlo fácilmente y las herramientas pueden usarlo para automatizar tareas.

- Define toda la API: Incluye:

Rutas (endpoints)

Métodos HTTP (GET, POST, PUT, DELETE, etc.)

Parámetros de la solicitud (query, path, headers, body)

Objetos de respuesta y códigos de estado

Esquemas de seguridad (API keys, OAuth, etc.)

Información extra como versión, contacto, licencia

**¿Por qué es importante OpenAPI?**
- Documentación automática: Herramientas como Swagger UI generan documentación interactiva y actualizada de tu API.

- Generación de SDKs: Puedes generar clientes para tu API en varios lenguajes automáticamente.

- Validación y pruebas: Permite validar que las peticiones y respuestas cumplan con el esquema definido.

- Mock servers: Puedes crear servidores simulados que respondan según la especificación para pruebas.

- Diseño primero: Puedes diseñar la API en OpenAPI antes de implementarla, mejorando la colaboración y la coherencia.

**Flujo típico con OpenAPI**
- Diseñar: Escribes la especificación OpenAPI en YAML o JSON, definiendo endpoints, esquemas y seguridad.

- Documentar: Usas Swagger UI o Redoc para mostrar documentación viva y navegable.

- Implementar: Construyes la API real asegurándote que siga la especificación.

- Probar y generar: Usas herramientas para testear y generar código cliente o servidor automáticamente.

- Mantener: Actualizas la especificación conforme tu API cambia.

## Ejemplo:

```yaml
openapi: 3.0.3
info:
  title: API de Tienda
  version: 1.0.0
paths:
  /productos:
    get:
      summary: Obtener todos los productos
      responses:
        '200':
          description: Lista de productos
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Producto'
components:
  schemas:
    Producto:
      type: object
      properties:
        id:
          type: string
          example: "664f173bd4e2b36c50ac9b1a"
        nombre:
          type: string
          example: "Guitarra eléctrica"
        precio:
          type: number
          example: 499.99
        enStock:
          type: boolean
          example: true

```




**Paso 1:**: Instalacion
```bash
npm install swagger-ui-express swagger-jsdoc
```

**Paso 2:**
Crear un archivo de configuracion

```js
// swagger.js
import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'A sample API using RBAC and MongoDB',
    },
    servers: [
      {
        url: 'http://localhost:5000/api/v1',
      },
    ],
  },
  apis: ['./routes/*.js'], // Your route files with Swagger comments
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);

```
**Paso 3:** Agregar middleware

```js
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.js';

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

```


**Paso 4:** Comentar las rutas
```js
/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtener todos los productos
 *     description: Devuelve una lista de todos los productos disponibles.
 *     tags:
 *       - Productos
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "664f173bd4e2b36c50ac9b1a"
 *                   nombre:
 *                     type: string
 *                     example: "Guitarra eléctrica"
 *                   precio:
 *                     type: number
 *                     example: 499.99
 *                   enStock:
 *                     type: boolean
 *                     example: true
 *       500:
 *         description: Error del servidor
 */
```


**Paso 5:**
 http://localhost:5000/docs


