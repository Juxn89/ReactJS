const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// console.log(process.env);

// Create express server
const app = express();

// Data base
dbConnection();

// Public directory
app.use(express.static('public'));

// Read and parse body
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Listening requests
app.listen(process.env.PORT, () => {
    console.log('Express server running...');
});