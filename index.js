const express = require('express');
const port = 3001;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');

// INITIALIZING EXPRESS
const app = express();

app.use(bodyParser.urlencoded({extended:true}));


//  SETTING ROUTER
app.use('/', require('./routes/index'));


//  CREATING SERVER
app.listen(port, (err) => {
    if (err) {
        console.log("Error connecting to server!!", err);
        return;
    }
    console.log("Successfully connected to port: ", port);
})