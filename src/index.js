const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware zum Parsen von JSON
app.use(express.json());

// Middleware zum Servieren statischer Dateien
app.use(express.static(path.join(__dirname, 'public')));

// Beispiel-API-Route (optional)
app.post('/summarize', (req, res) => {
    const { text } = req.body;
    // Placeholder für Zusammenfassungslogik
    res.json({ summary: 'Zusammenfassung noch nicht implementiert.' });
});

// Fallback-Route für nicht gefundene Seiten
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
