
## Change Event Streams

**¿Qué es un Change Event Stream?**
Un Change Event Stream (flujo de eventos de cambio) es una funcionalidad de MongoDB que permite escuchar en tiempo real los cambios que ocurren en una colección o base de datos.
Puedes recibir eventos cuando se inserta, actualiza, elimina o reemplaza un documento.

Internamente, MongoDB usa el *oplog* (registro de operaciones) de los replica sets para generar estos eventos.

Quieres llevar un registro de quién cambió qué y cuándo.

Con un Change Stream, puedes hacer esto automáticamente:

```js

const stream = db.collection("clientes").watch();

stream.on("change", (event) => {
  db.collection("audit_log").insertOne({
    tipo: event.operationType,
    documento: event.fullDocument,
    fecha: new Date(),
  });
});
Cada vez que alguien inserte, actualice o borre un cliente, se guardará un log con los detalles del cambio.
```

**Beneficios**
- Reacción en tiempo real (webhooks, notificaciones).

- No necesitas polling ni cron jobs.

- Perfecto para integraciones, replicación, monitoreo o auditoría.

## Actividades
### Actividad 1:
Vamos a implantar un sistema de change streaming para controlar los

```js

import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

// 1. definir un constante de LOW_STOCK


async function run() {
  try {
   
    await client.connect();

    const database = client.db("clase");
    const productos = database.collection("productos");

    // Open a change stream on the collection
    
    // 2. ¿Qué operaciones quieres controlar de MongoDB?
    
    const changeStream = productos.watch(
      [
        {
          $match: {operationType: {$in : ['delete']}}
        }
      ],
      {
        fullDocument: "updateLookup"
      }
    );
    // Incluimos fullDocument: "updateLookup" ya que por defecto un update no recibe el documento


    changeStream.on("change", (change) => {
        const id = change.documentKey._id;
        const producto = change.fullDocument;
      
        // 3. Comprobar que tienes un objecto producto

        // 4. Validar si la cantidad es menos o igual que LOW_STOCK
        // Mandar un mensaje al usuario (console.log)



    });

    process.stdin.resume();

     // Handle shutdown signals gracefully
    process.on("SIGINT", async () => {
      await client.close();
      process.exit(0);
    });

    process.on("SIGTERM", async () => {
      await client.close();
      process.exit(0);
    });



  } catch (error) {
    console.error("Error connecting to MongoDB or running commands:", error);
  }
}

run();


```

### Actividad 2:
Vamos a gestionar un sistema de alertas / notificaciones para cualquier 'update' en el documento.

Fijáte en la información displonible en `change.updateDescription`. ¿Qué recibes si insert o delete un documento?  

```js
const changeTransactionDoc = change.updateDescription;

```


---

## Respuesta

```js

import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();


// Replace with your actual MongoDB Atlas connection string
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

const LOW_STOCK = 10;

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    const database = client.db("clase");
    const productos = database.collection("productos");

    // Open a change stream on the collection
    const changeStream = productos.watch(
      [
        {
          $match: {operationType: {$in : ['insert', 'update', 'delete']}}
        }
      ],
      {
        fullDocument: "updateLookup"
      }
    );


    changeStream.on("change", (change) => {
      const id = change.documentKey._id;
      const producto = change.fullDocument;
      
      if (!producto) {
        console.log('No product found');
        return
      }

      
      if (producto.cantidad <= LOW_STOCK) {
          console.log(`Por favor, Pedir un order para ${producto.nombreProducto}. Solo quedan ${producto.cantidad}`);
      };



    });

    process.stdin.resume();

     // Handle shutdown signals gracefully
    process.on("SIGINT", async () => {
      await client.close();
      process.exit(0);
    });

    process.on("SIGTERM", async () => {
      await client.close();
      process.exit(0);
    });



  } catch (error) {
    console.error("Error connecting to MongoDB or running commands:", error);
  }
}

run();



```