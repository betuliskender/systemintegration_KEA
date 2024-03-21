const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for handling SSE
app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Send a message every second
    const interval = setInterval(() => {
        const message = `data: ${new Date().toISOString()}\n\n`;
        res.write(message);
    }, 1000);

    // Clean up when the client closes the connection
    res.on('close', () => {
        clearInterval(interval);
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
