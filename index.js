const express = require('express');
const app = express();
const path = require('path');

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Homepage route
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cool Website</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
            <style>
                body { background-color: #282c34; color: white; text-align: center; padding: 50px; }
                h1 { font-size: 3rem; }
                .btn-custom { background-color: #61dafb; border: none; padding: 10px 20px; font-size: 1.2rem; }
            </style>
        </head>
        <body>
            <h1>Welcome to the Cool Website!</h1>
            <p>This is a simple Node.js website with Bootstrap styling.</p>
            <a href="/about" class="btn btn-custom">Learn More</a>
        </body>
        </html>
    `);
});

// About page route
app.get('/about', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>About Us</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body style="background-color: #20232a; color: white; text-align: center; padding: 50px;">
            <h1>About This Website</h1>
            <p>This is a simple website built using Express and Bootstrap.</p>
            <a href="/" class="btn btn-primary">Go Back</a>
        </body>
        </html>
    `);
});

// Start server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;
