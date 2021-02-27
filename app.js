const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// Database
const db = require('./config/database');

// Test db
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

// Pipe routes
app.use('/pipes', require('./routes/pipes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));