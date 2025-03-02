TO DO

If your server.js file has too many routes, the best way to manage it is by organizing routes into separate files and using Express routers. Here’s how you can do it:

1. Create a routes Directory
Inside your project, create a routes folder to store route files.

2. Move Routes into Separate Files
For example, if you have user-related routes, create routes/userRoutes.js:

const express = require("express");
const router = express.Router();

// Define routes
router.get("/", (req, res) => {
  res.send("Get all users");
});

router.post("/", (req, res) => {
  res.send("Create a new user");
});

// Export the router
module.exports = router;
Similarly, create other route files like productRoutes.js, orderRoutes.js, etc.

3. Use Routes in server.js
In server.js, import and use these routes:

const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Import routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

// Use routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
4. Optional: Use a Central Route Index
Instead of importing each route separately in server.js, create an index file inside routes:

routes/index.js

const express = require("express");
const router = express.Router();

router.use("/users", require("./userRoutes"));
router.use("/products", require("./productRoutes"));

module.exports = router;
Then, modify server.js:

const express = require("express");
const app = express();

app.use(express.json());
app.use("/", require("./routes")); // Import all routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
Benefits of This Approach
✔ Keeps server.js clean and organized
✔ Makes it easy to add new routes
✔ Improves maintainability and scalability

Let me know if you need additional improvements!

