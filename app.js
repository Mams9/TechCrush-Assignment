const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Home route - simple live page you can screenshot
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Node.js Docker App</title></head>
      <body style="font-family: sans-serif; text-align: center; margin-top: 50px;">
        <h1>🚀 Node.js App is Running!</h1>
        <p>Deployed via Docker on: <strong>${os.hostname()}</strong></p>
        <p>Server time: ${new Date().toLocaleString()}</p>
        <p>Try <a href="/api/status">/api/status</a> or <a href="/api/hello?name=World">/api/hello?name=World</a></p>
      </body>
    </html>
  `);
});

// Health/status endpoint
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    hostname: os.hostname(),
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Simple greeting endpoint
app.get('/api/hello', (req, res) => {
  const name = req.query.name || 'World';
  res.json({ message: `Hello, ${name}!` });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
