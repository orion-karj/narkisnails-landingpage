const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Vercel! Test function working.');
});

app.get('/test', (req, res) => {
  res.json({ 
    message: 'Test route working!', 
    timestamp: new Date().toISOString(),
    __dirname: __dirname
  });
});

module.exports = app;
