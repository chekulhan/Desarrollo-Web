Include examples of more specific middleware, like iniciar session, logging, etc....


import express from 'express';

const app = express();

// Logger Middleware
function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}

// Authentication Middleware
function checkAuthentication(req, res, next) {
    const { auth } = req.query;
    if (auth !== 'true') {
        return res.status(401).send('Unauthorized: Please log in to view the profile');
    }
    next();
}

// Apply the logger middleware globally
app.use(logger);

// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server! Use /profile to see user info (authentication required)');
});

// Profile Route with Authentication Middleware
app.get('/profile', checkAuthentication, (req, res) => {
    res.send('User Profile: John Doe, Age 30');
});

// Error Route (404)
app.get('/error', (req, res) => {
    res.status(404).send('Page Not Found');
});

// Custom 404 Middleware
app.use((req, res) => {
    res.status(404).send('Custom 404: The route does not exist');
});

// Start the Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
