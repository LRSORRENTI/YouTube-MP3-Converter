require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mainRoute = require('./routes/frontPage');
// const convertRoute = require('./src/convert');

// Get port from environment variables or use 3000 as a default
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // Middleware to parse JSON requests
app.use('/', mainRoute);
// app.use('.src/convert', convertRoute); // Add the convertRoute

// Central error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
