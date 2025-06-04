
# Polling

```bash
npm create vite@latest

// seleccionar: vite-frontend, React, Javascript

cd vite-frontend
npm install
```


Vamos a ver un ejemplo de polling, usando MongoDB de backend base de datos. Al cambiar un dato en la base de datos, lo veremos reflejado, cada 5 segundos, en la pantalla de web.

Express

productos.js
```js
import { Router } from 'express';

const router = Router();

// GET /api/v1/productos

router.get('/', async (req, res) => {
  try {
    const db = req.app.locals.db; // get db instance from app.locals
    const productos = await db.collection('productos').find().toArray();

    res.json(productos);

  } catch (error) {
    console.error("Error fetching productos:", error);
    res.status(500).json({ error: 'Failed to fetch productos' });
  }
});

export default router;
```



/components/Polling.jsx

Para este demo, quitar los comentarios de setInterval 
```jsx
import React, { useEffect, useState } from 'react';


const Polling = () => {
  const [productos, setProductos] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);


  const fetchProductos = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/productos');

      if (!response.ok) throw new Error('Error en la respuesta');
      const data = await response.json();
      setProductos(data);
      

    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  useEffect(() => {
    /* const interval = setInterval(() => {
      setIsRefreshing(true);
      setTimeout(() => {
        setIsRefreshing(false);
        fetchProductos();
      }, 1000); // wait 1 second before fetch
    }, 5000);
    */

    fetchProductos(); // initial load

    // return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div style={{ padding: '2rem' }}>

    {isRefreshing && (
        <div style={{ color: 'orange', marginBottom: '1rem' }}>
        Actualizando productos...
        </div>
    )}

      <h2>📦 Productos (con polling)</h2>
      {productos.map((prod) => (
        <div key={prod._id} style={{ marginBottom: '1rem' }}>
          <strong>{prod.nombreProducto}</strong> — {prod.cantidad} unidades
          
        </div>
      ))}
    </div>
  );
}

export default Polling;
```


# Web Sockets

Antes de WebSockets, la comunicación en la web era básicamente **unidireccional y sin estado**.

**Nace el protocolo WebSocket**
En 2008, Ian Hickson (quien también trabajó en HTML5) comenzó a diseñar un protocolo para comunicación bidireccional y persistente.

En 2011, WebSocket fue estandarizado oficialmente por el IETF (RFC 6455).

Fue diseñado para permitir que los navegadores y servidores mantengan una conexión abierta y puedan enviar datos en ambas direcciones sin la sobrecarga de HTTP.

---

Un socket es un canal de comunicación entre dos puntos (normalmente cliente y servidor) que permite enviar y recibir datos en tiempo real.

1. Establecimiento de conexión
Cuando un cliente (navegador o app) quiere usar sockets, abre una conexión con el servidor.

En el caso de Socket.IO, el cliente primero intenta una conexión HTTP estándar (llamada "handshake").

Luego, esa conexión se "actualiza" a un canal bidireccional y persistente usando el protocolo WebSocket, si está disponible.

Si WebSocket no está disponible (por ejemplo, por firewall), Socket.IO puede usar otros métodos como long polling para simular conexión en tiempo real.

2. Comunicación bidireccional en tiempo real
Una vez establecida, el canal WebSocket permite que tanto cliente como servidor envíen mensajes en cualquier momento sin tener que hacer una nueva petición HTTP.

Esto es muy diferente al modelo clásico HTTP donde el cliente siempre debe "preguntar" (request) y el servidor "responder" (response).

Aquí el servidor puede enviar mensajes sin que el cliente pregunte, y viceversa.

3. Eventos
Socket.IO implementa un sistema basado en eventos.

Tanto el cliente como el servidor "escuchan" eventos específicos y reaccionan a ellos.

Por ejemplo, en tu código tienes eventos como 'chatMessage', 'productoNuevo', 'productoEliminado'.

4. Desconexión
Cuando el cliente se desconecta (cierra la pestaña, pierde conexión, etc.), el servidor detecta esta desconexión y puede limpiar recursos o notificar a otros usuarios.

Express
```bash

npm install socket.io

```


Vite/React
```bash
npm install socket.io-client
```

| Acción            | Quién     | Código                        | Propósito                                     |
|-------------------|-----------|-------------------------------|-----------------------------------------------|
| Emitir mensaje    | Cliente   | `socket.emit(...)`            | Enviar un mensaje al servidor                 |
| Escuchar          | Servidor  | `socket.on(...)`              | Recibir el mensaje desde el cliente           |
| Emitir a todos    | Servidor  | `io.emit(...)`                | Enviar el mensaje a todos los clientes        |
| Escuchar          | Cliente   | `socket.on(...)`              | Recibir mensajes del servidor                 |

| Método                         | Quién recibe el mensaje                                  | Ejemplo de uso                                         |
|-------------------------------|----------------------------------------------------------|-------------------------------------------------------|
| `socket.emit(event, data)`      | Solo el cliente conectado en este socket (el remitente) | Enviar un acuse de recibo o datos personales solo al remitente |
| `socket.broadcast.emit(event, data)` | Todos los clientes conectados excepto el remitente      | Notificar a todos los demás cuando este cliente hace algo (ej. "usuario está escribiendo") |
| `io.emit(event, data)`          | Todos los clientes conectados, incluido el remitente     | Transmitir un mensaje a todos (ej. "nuevo mensaje en el chat") |


## Ping Pong
```js
const io = new Server(server, {
  pingInterval: 25000, // how often to send pings (default: 25000ms)
  pingTimeout: 60000   // how long to wait for a pong (default: 5000ms)
});
```







## Actividades
### MongoDB Productos Socket
Mejoras:
- Al lado del cliente (vite), hacer el cálculo de precioTotal para cada uno de los productos, que es precio * cantidad
- Al lado del servidor (express), hacer lo mismo
- Incluir un precio con el valor total del producto, incluyendo IVA.
- Queremos seleccionar solo los productos con un atributo del estado = 'completado'. ¿Dónde podrias incluir este tipo de filtro?

### Chat Message

- Agregar los mensajes mandado por el cliente a una colleción en MongoDB




## Respuestas

```js
let productos = await productosCollection.find().toArray();

        productos = productos.map((p) => ({
          ...p,
          totalPrice: p.precio * p.cantidad
        }) );


const changeStream = productosCollection.watch(
      [
        { $match: { operationType: { $in: ["insert", "update", "replace", "delete"] } ,
          "fullDocument.estado": "completado",
        },   
      }
      ],
      { fullDocument: "updateLookup" }
    );

```