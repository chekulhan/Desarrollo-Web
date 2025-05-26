

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


