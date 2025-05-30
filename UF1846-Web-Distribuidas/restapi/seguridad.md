# API seguridad

**Usar proyecto de express-mongodb y el client**
Para montar este ejemplo, tenemos que incluir /routes/seguridad.js y ademas su referencia en el index.js. 

```js
import seguridadRouter from './routes/seguridad.js';

app.use('/api/v1/seguridad', seguridadRouter);
```


**Curl**
```bash
curl -H "x-api-key: abc123" http://localhost:5000/api/v1/seguridad
{"message":"exito"}
```


**Opción 1**

```js
fetch('http://localhost:5000/api/v1/seguridad', {
  method: 'GET',
  headers: {
    'x-api-key': 'abc123', // Remplezar con tu acceso 
  },
})
  .then(response => {
    if (!response.ok) throw new Error('Access denied');
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch(err => {
    console.error('Error:', err.message);
  });


```

**Option 2: Authorization': 'Bearer'**
```js
// la acción GET desde el cliente seria:
headers: {
        'Authorization': 'Bearer token123',  // use your actual token here
        'Content-Type': 'application/json',
      },

// y en express ...

router.use((req, res, next) => {
  const authHeader = req.headers['authorization']; // get Authorization header

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

```



# RBAC 
RBAC significa Role-Based Access Control — en español, Control de Acceso Basado en Roles.

Es un método para controlar quién puede hacer qué en una aplicación o sistema, asignando permisos a usuarios según su rol.

**¿Cómo funciona?**
En vez de asignar permisos individualmente a cada usuario, agrupas los permisos en roles.

Luego asignas uno o varios roles a cada usuario.

Cuando un usuario intenta realizar una acción, el sistema verifica si su rol le permite hacerlo.

```jsx
const roles = {
  admin: ['read:any', 'write:any'],  // El admin puede leer y escribir todo
  user: ['read:own'],                 // El usuario sólo puede leer sus propios datos
};
```
Si un usuario tiene rol admin, podrá leer y modificar cualquier dato.

Si un usuario tiene rol user, sólo podrá leer sus propios datos.

## Actividad
Implementamos una conexion con un usuario de MongoDB, que solo puede acceder a sus datos.

Por ejemplo, al pasar un ObjectId al rest endpoint para obtener sus datos, 

```jsx
const fetchReadOwn = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/v1/users/683536ff702fa24a37aac4f2', {
      method: 'GET',
      headers: {
        'x-api-key': 'abc123',  // Obtender desde .env
        'Content-Type': 'application/json', // Optional for GET
        'x-user-role': 'user',  // NO es seguro! Demo solo!
        'x-user-id': '683536ff702fa24a37aac4f2'  // OJO: deberia ser igual que la /:id de ruta
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);

  } catch (error) {
      console.error('Error fetching seguridad:', error.message);
  }
}
```

Empezamos con roles como:

```jsx
export const roles = {
  user: ['read:own', 'write:own'],
};
```




