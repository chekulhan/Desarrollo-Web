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

TO DO