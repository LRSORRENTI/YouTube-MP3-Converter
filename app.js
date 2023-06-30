const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mainRoute = require('./routes/frontPage')

app.use(express.static(path.join(__dirname, 'public')))


app.use('/', mainRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})