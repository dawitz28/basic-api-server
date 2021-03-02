'use strict';

const express =  require('express');
const app = express();

//internal modules
const notFound = require('./src/middleware/404.js');
const errors = require('./src/error-handlers/500.js');
const logger = require('./src/middleware/logger.js');

//internal constants 
const PORT = process.env.PORT || 3333;

//run this for everthing
app.use('*', notFound);
//error handling middleware is always at the bottom of the
app.use(errors);


module.exports ={
    server: app,
    start: (port) => {

        app.listen(port, () => {
            console.log(`listening on ${port}`);
        });
    }
}