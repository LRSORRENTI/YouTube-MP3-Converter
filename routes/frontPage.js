const path = require('path')

const express = require("express");

const router = express.Router();

const rootDir = require('../utils/path')

// router.get('/', (req, res, next) => {

//     res.sendFile(path.join(rootDir, 'views', 'index.html'))
// })
router.get('/', (req, res, next) => {
    try {
        res.sendFile(path.join(rootDir, 'views', 'index.html'));
    } catch (err) {
        next(err);  // Pass the error to Express
    }
});


module.exports = router;