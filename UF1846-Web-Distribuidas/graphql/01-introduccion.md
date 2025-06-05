

Project Structure – graphql-project/
```pgsql
graphql-project/
├── backend/    ← Node.js + Express + GraphQL server
│   ├── server.js
│   ├── schema.js
│   ├── resolvers.js
│   └── .env
├── frontend/     ← React + Vite + Apollo Client - Usaremos vite para crear la app
│   ├── (React app files)
└── README.md (optional)
```


Crear la carpeta `graphql-project/` y dentro de ella, crear la carpeta `backend/`.

** Backend **
Dentro de `backend/`, ejecutar:

```bash
npm init -y
npm install express express-graphql graphql mongodb dotenv
```

.env

```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/mydb
```

** Frontend **
Dentro de la raiz `graphql-project/`, ejecutar:

```bash
npm create vite@latest frontend --template react
cd frontend
npm install

npm install @apollo/client graphql

```


main.jsx
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

```

app.jsx
```jsq
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTOS = gql`
  query {
    productos {
      prodId
      nombreProducto
      precio
      cantidad
      activo
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_PRODUCTOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading productos.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Productos</h1>
      <ul>
        {data.productos.map(p => (
          <li key={p.prodId}>
            <strong>{p.nombreProducto}</strong> — ${p.precio} x {p.cantidad} 
            {p.activo ? ' ✅' : ' ❌'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

```


🟤 Start the backend

```bash
cd backend
node server.js
```
🔵 Start the frontend
```bash
cd frontend
npm run dev
```


---
# Historia de GraphQL
GraphQL fue desarrollado en 2012 por ingenieros de Facebook para resolver problemas relacionados con las APIs REST tradicionales. Facebook necesitaba una forma más eficiente y flexible para que sus aplicaciones móviles y web pudieran pedir exactamente los datos que necesitaban sin sobrecargar la red ni hacer múltiples llamadas. En 2015, Facebook liberó GraphQL como un proyecto open source para que la comunidad pudiera beneficiarse de esta tecnología.

**Ventajas de GraphQL**

- Consulta precisa de datos
Permite a los clientes pedir solo los campos que necesitan.
Ejemplo: En vez de recibir toda la información de un usuario, puedes pedir solo el nombre y correo electrónico.

- Un solo endpoint
Todas las operaciones (consultas y mutaciones) se realizan a través de un único endpoint HTTP.
Ejemplo: No necesitas múltiples URLs REST para diferentes recursos.

- Obtención de datos relacionados en una sola consulta
Puedes solicitar datos relacionados en una única llamada.
Ejemplo: Pedir un producto y sus comentarios en una sola query.

- Mejor experiencia para desarrolladores frontend
Los desarrolladores controlan qué datos recibir, evitando depender del backend para cambios pequeños.
Ejemplo: Agregar un nuevo campo en la UI sin cambiar el backend, siempre que el campo esté disponible.

- Tipado fuerte y autodescriptivo
GraphQL tiene un esquema definido que describe qué datos existen y cómo consultarlos.
Ejemplo: Herramientas que autogeneran documentación y autocomplete basados en el esquema.

- Agregación de múltiples fuentes de datos
Permite combinar datos de varias bases de datos o APIs en una sola consulta.
Ejemplo: Obtener datos de usuarios desde MongoDB y datos de pedidos desde otro servicio REST.

**Desventajas de GraphQL**

- Complejidad inicial, Mayor curva de aprendizaje

- Posibles problemas de rendimiento
Consultas muy complejas o mal diseñadas pueden afectar el rendimiento, por ejemplo, queries anidadas muy profundas o sin límites.

- Caching más difícil
Al tener un solo endpoint y consultas dinámicas, el caching tradicional basado en URLs REST es menos directo.

- Posible sobrecarga en el backend
Si no se limita o controla adecuadamente, los clientes pueden pedir demasiados datos o realizar consultas costosas.

## Yoga
https://the-guild.dev/graphql/yoga-server

**Query**: Son operaciones de solo lectura que piden datos. Por ejemplo, obtener una lista de productos o un producto específico. Los resolvers de query responden a estas solicitudes y devuelven la información solicitada.

**Resolvers**: Son funciones que definen cómo obtener o modificar los datos que pide una consulta (query) o una mutación (mutation) en GraphQL. Actúan como "controladores" que conectan el esquema GraphQL con tus fuentes de datos (bases de datos, APIs, etc.).

**Mutation**: Son operaciones que modifican datos, como crear, actualizar o eliminar registros. Los resolvers de mutation ejecutan estas acciones y suelen devolver el dato modificado o algún resultado que confirme la operación.

En resumen:
Las queries leen datos, las mutations los cambian, y los resolvers son las funciones que implementan esa lógica para cada operación.

```bash
npm install graphql @graphql-yoga/node
```

! = no null
```graphql
_id: ID!
```


### Query
```graphql
query {
    hello
  }
```


```graphql

query {
  productos {
    _id
    nombreProducto
    precio
    cantidad
  }
}


query {
  producto(id: "68347b7c4ae331876deb964a") {
    _id
    nombreProducto
    precio
    cantidad
  }
}




mutation {
  addProducto(input: {
    nombreProducto: "Cámara",
    precio: 250.50,
    cantidad: 5
  }) {
    _id
    nombreProducto
    precio
    cantidad
  }
}


mutation {
  updateProducto(id: "68412dd024c9b3e0a7087881", input: {
    nombreProducto: "Cámara Profesional",
    precio: 300.00,
    cantidad: 7
  }) {
    _id
    nombreProducto
    precio
    cantidad
  }
}


mutation {
  deleteProducto(id: "68347b7c4ae331876deb964a")
}

```



### Mutaciones
Mutación en GraphQL es una operación que modifica datos en el servidor.

- Mientras que una consulta (query) solo lee datos,

- una mutación (mutation) crea, actualiza o elimina datos.

Por ejemplo, si quieres agregar un producto nuevo, usarás una mutación.

**Ejemplo de mutación:**

```graphql
mutation {
  crearProducto(producto: {
    nombreProducto: "Laptop",
    precio: 1200.50,
    cantidad: 10
  }) {
    _id
    nombreProducto
    precio
    cantidad
  }
}
```
Esto crea un producto y devuelve los datos creados.

### Consultas con parámteros
```graphql

  type Query {
    productos(cantidadMin: Int): [Producto!]!
    producto(id: ID!): Producto
  }
```

Actualizar el resolver para buscar por cantidad o sacar todos los datos:
```graphql

export const resolvers = {
  Query: {
    productos: async (_parent, args, context) => {
      const db = context.db;

      const query = {};
      if (args.cantidadMin !== undefined) {
        query.cantidad = { $gte: args.cantidadMin };
      }

      return await db.collection('productos').find(query).toArray();
    },

    producto: async (_parent, { id }, context) => {
      const db = context.db;
      return await db.collection('productos').findOne({ _id: new ObjectId(id) });
    },
  },
};

```

y sacar la query con:
```graphql

query {
  productos(cantidadMax: 9) {
    _id
    nombreProducto
    precio
    cantidad
  }
}


query GetProductosCantidadMenor10 {
  productos(cantidadMax: 9) {
    _id
    nombreProducto
    precio
    cantidad
  }
}
```





### Esquemas múltiples
Para tener múltiples esquemas, hacer lo siguiente:
index.js
```js
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import * as basic from './basicSchema.js';
import * as user from './userSchema.js';

export const typeDefs = mergeTypeDefs([basic.typeDefs, user.typeDefs]);
export const resolvers = mergeResolvers([basic.resolvers, user.resolvers]);
```