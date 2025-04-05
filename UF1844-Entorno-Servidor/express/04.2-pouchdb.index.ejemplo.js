import express from "express";
import path from "path";
import cors from 'cors';
import { fileURLToPath } from "url";
import PouchDB from 'pouchdb';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const dataDirectory = path.join(__dirname, 'data'); 

PouchDB.defaults({
  prefix: path.join(dataDirectory, path.sep), 
});

//const db = new PouchDB('users');
const db = new PouchDB(path.join(dataDirectory, 'tienda'));

// API Route Example
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express again!" });
});


app.get('/api/users', async (req, res) => {
  try {
      // Fetch all documents from the 'users_db'
      const result = await db.allDocs({ include_docs: true });

      
      // Filter the users if 'type' is used in the document
      const users = result.rows
        .filter(row => row.doc.type === 'user')  // Ensure the document type is 'user'
        .map(row => row.doc);  // Map to get the document content


      // Extract user data from the documents
      //const users = result.rows.map(row => row.doc);

      // Send the users as JSON response
      res.json(users);
  } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

app.post('/api/users', async (req, res) => {
  try {
      const user = req.body; // User data from request body
      user.type = 'user'; // diferenciar los documentos

      // Insert new user into the database
      const response = await db.post(user);
      
      // Respond with success
      res.status(201).json({ id: response.id, ...user });
  } catch (error) {
      res.status(500).json({ error: 'Failed to add user' });
  }
});


// **OPCIONAL**
// Serve React Frontend 
//app.use(express.static(path.join(__dirname, "../build")));

//app.get("*", (req, res) => {
//  res.sendFile(path.join(__dirname, "../build", "index.html"));
//});
// **END OPCIONAL**

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API',
    routes: {
      users: '/api/users',
      posts: '/api/posts',
      auth: '/api/auth',
    }
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});