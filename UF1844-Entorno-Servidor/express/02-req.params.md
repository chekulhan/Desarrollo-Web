TO DO:

Understanding req.query vs req.params
It's important to differentiate between query parameters (req.query) and route parameters (req.params). Query parameters are appended to the URL, while route parameters are part of the URL path.
Example:

javascript
Copiar
Editar
// Query: /about?nombre=John
// Route parameter: /about/:id

app.get('/user/:id', (req, res) => {
    console.log(req.params.id);  // Accessing the ID from the route
});
