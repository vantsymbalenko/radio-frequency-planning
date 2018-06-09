const express = require('express');
const routes = require('./routes/api.js');
const bodyParser = require('body-parser');

// set up express app 
const app = express();

app.use(bodyParser.json());
app.use(routes);

const HOST = 'http://localhost';



// listen for request
app.listen(process.env.port || 4000, () => {
    console.log('now listening or requests');
});