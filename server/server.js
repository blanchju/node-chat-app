// app dependencies
// public librairies
const path = require('path');
const express = require('express');

// repo path
var publicPath = path.join(__dirname, '../public');
var serverPath = path.join(__dirname);

// app
// set app 
var app = express();
app.use(express.static(publicPath));
const port = process.env.PORT || 3000;

// port setter
// set listening port to 3000
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});