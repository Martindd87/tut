// src/index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Beispielroute
app.get('/', (req, res) => {
  res.send('Hallo Welt!');
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
