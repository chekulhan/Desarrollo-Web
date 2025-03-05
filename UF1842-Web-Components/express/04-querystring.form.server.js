
1. Getting Query String Parameters
Query string parameters are usually found in the URL after the ?, for example, http://localhost:3000/search?term=apple&page=2. You can access these parameters using req.query.

```javascript
app.get('/search', (req, res) => {
  const searchTerm = req.query.term;  // e.g., "apple"
  const page = req.query.page;        // e.g., "2"
  
  res.render('search', {
    title: 'Search Results',
    searchTerm: searchTerm,
    page: page
  });
});
```

In this example:

The query string parameters term and page are extracted from the URL.
The data is then passed to the EJS template for rendering.
In the URL, the query string might look like this:

```bash
http://localhost:3000/search?term=apple&page=2
```

You can access term and page in your EJS template like this:

```html
<h1>Search Results for "<%= searchTerm %>"</h1>
<p>Page: <%= page %></p>
```

2. Getting Form Data (POST Request)

To handle form data, you'll typically use req.body. To do this, you need to ensure you're using middleware to parse the incoming request body. In Express, you can use express.urlencoded() for form-encoded data (e.g., when using <form> tags).

1. Setting up middleware for parsing form data

```javascript
// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// GET route to display the form
app.get("/", (req, res) => {
    res.render("form", { error: null });
});

// POST route to handle form submission
app.post("/submit", (req, res) => {
    const { name, email } = req.body;

    // Validation (Example: Check if name and email are filled)
    if (!name || !email) {
        return res.render("form", { error: "Please fill in all fields." });

```


2. HTML Form Example
html
Copiar
Editar
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <button type="submit">Submit</button>
</form>
When the user submits the form, Express will parse the form data and make it available via req.body.name and req.body.email. In the example above:

The form data is sent to the /submit route via a POST request.
The values from the form are passed into the EJS template (thankyou.ejs) to be displayed.
In thankyou.ejs:

html
Copiar
Editar
<h1><%= title %></h1>
<p>Thank you for submitting, <%= name %>!</p>
<p>Your email is: <%= email %></p>
Summary:
Query String: Use req.query to access query parameters in the URL (e.g., req.query.term).
Form Data (POST): Use req.body to access form data when you use express.urlencoded() middleware for parsing POST requests. Make sure to use body-parser or Express's built-in middleware (express.urlencoded()).
These methods allow you to access both types of data (query string and form data) and render dynamic content using EJS.