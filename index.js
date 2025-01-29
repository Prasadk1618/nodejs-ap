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
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
            <style>
                body { background-color: #282c34; color: white; text-align: center; padding: 50px; }
                h1 { font-size: 3rem; opacity: 0; }
                .btn-custom { background-color: #61dafb; border: none; padding: 10px 20px; font-size: 1.2rem; opacity: 0; }
            </style>
        </head>
        <body>
            <h1 id="title">Welcome to Prasad Kale World!</h1>
            <p>This is a simple Node.js website with Bootstrap styling.</p>
            <a href="/about" class="btn btn-custom" id="btn">Learn More</a>
            <script>
                gsap.to("#title", { duration: 1, opacity: 1, y: -20, ease: "power2.out" });
                gsap.to("#btn", { duration: 1.5, opacity: 1, delay: 0.5, y: -10, ease: "power2.out" });
            </script>
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
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        </head>
        <body style="background-color: #20232a; color: white; text-align: center; padding: 50px;">
            <h1 id="about-title">About This Website</h1>
            <p>This is a simple website built using Express and Bootstrap.</p>
            <a href="/" class="btn btn-primary" id="back-btn">Go Back</a>
            <script>
                gsap.from("#about-title", { duration: 1, opacity: 0, y: 20, ease: "power2.out" });
                gsap.from("#back-btn", { duration: 1.5, opacity: 0, delay: 0.5, y: 10, ease: "power2.out" });
            </script>
        </body>
        </html>
    `);
});

// Start server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;
