
# OpenAPI 3.0?
OpenAPI 3.0 es una especificación para describir APIs REST de manera clara, estructurada y comprensible tanto por humanos como por máquinas. Es la evolución del antiguo estándar Swagger 2.0.

Gracias a OpenAPI puedes:

- Generar documentación automática de tus APIs (Swagger UI).

- Crear clientes y servidores automáticamente en diferentes lenguajes.

- Validar que tus APIs cumplen con la documentación.

## 🔧 ¿Para qué sirve?
- 📚 Documentar tu API automáticamente (con Swagger UI).

- 🧪 Probar endpoints de manera interactiva.

- 🔁 Compartir especificaciones con otros equipos fácilmente.

- ⚙️ Generar código para clientes y servidores.

## Ejemplo
Aquí tienes un ejemplo simple que describe un endpoint GET `/api/v1/users/{id}`:

```yaml

openapi: 3.0.0
info:
  title: API de Usuarios
  version: 1.0.0
  description: API para gestionar usuarios en el sistema.

paths:
  /api/v1/users/{id}:
    get:
      summary: Obtener un usuario por su ID
      parameters:
        - name: id
          in: path
          required: true
          description: ID del usuario
          schema:
            type: string
      responses:
        '200':
          description: Usuario encontrado
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                    example: "abc123"
                  nombre:
                    type: string
                    example: "Juan Pérez"
                  email:
                    type: string
                    example: "juan@example.com"
        '404':
          description: Usuario no encontrado
        '500':
          description: Error del servidor
```


## Swagger Editor

https://editor.swagger.io/
