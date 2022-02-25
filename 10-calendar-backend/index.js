const express = require('express');

// Create express server
const app = express();

// Routes
app.get('/', (req, res) => {
    console.log('/ is querired');
    res.json({
        ok: true
    });
});

// Listening requests
app.listen(4000, () => {
    console.log('Express server running...');
});