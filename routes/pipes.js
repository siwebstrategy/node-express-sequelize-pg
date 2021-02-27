const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Pipe = require('../models/Pipe');

// Get all pipes
router.get('/', (req, res) => 
    Pipe.findAll()
        .then(pipes => {
            res.set('Access-Control-Allow-Origin', '*')
            res.json(pipes)
        })
        .catch(err => console.log(err)));

module.exports = router;