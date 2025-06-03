import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { Server as SocketIOServer } from "socket.io";

import productosRouter from "./routes/productos.js";
import connectDB from "./db-mongodb.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

async function startServer() {
  try {
    // Connect to MongoDB and store the DB instance in app.locals
    const db = await connectDB();
    app.locals.db = db;

    // Mount routes
    app.use("/api/v1/productos", productosRouter);

    // Create HTTP server from express app
    const httpServer = app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

    // Setup Socket.IO server on the same HTTP server
    const io = new SocketIOServer(httpServer, {
      cors: {
        origin: "*", // adjust for your frontend origin
      },
    });

    // Listen for client connections
    io.on("connection", async (socket) => {
      console.log("Client connected via Socket.IO");

      // get productos
      try {
        const productosCollection = app.locals.db.collection("productos");
        const productos = await productosCollection.find().toArray();
        socket.emit("productosLista", productos); // Send full list on connect
      } catch (error) {
        console.error("Failed to fetch productos on connect:", error);
      }

    });

    // Watch MongoDB collection for changes and emit events
    const productosCollection = db.collection("productos");
    const changeStream = productosCollection.watch(
      [
        { $match: { operationType: { $in: ["insert", "update", "replace", "delete"] } } },
      ],
      { fullDocument: "updateLookup" }
    );

    changeStream.on("change", async (change) => {
      const id = change.documentKey._id;
      // Get full document if not present in change
      const fullDocument =
        change.fullDocument || (await productosCollection.findOne({ _id: id }));


      // emit los cambios al cliente (insert, update)
      if (change.operationType === "insert") {

          if (!fullDocument) return;

          io.emit("productoNuevo", fullDocument);
      } else if (change.operationType === "update" || change.operationType === "replace") {

          if (!fullDocument) return;

          io.emit("productoModificado", fullDocument);
      } else if (change.operationType === "delete") {
        // Emit just the id of the deleted product - no fullDocument available
        io.emit("productoEliminado", { _id: id });
      }

     
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
