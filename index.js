 //importing or including express that was dowloaded from npmjs.com..here you can use require or import(expres) [// const express = require('express'); for commonjs...the import use below is for type modules done in the  package.json]
import express from 'express';

// Create an express app
const app = express();

// Define routes
app.get('/hello', function(req, res, next) {
     console.log(req.headers);
    res.json('You visited the hello endpoint! ');

});

app.get('/goodbye', function(req, res, next){
    console.log(req.query)
    res.json('Same to You or all the best')
});

// LIsten for incoming requests
app.listen(3000, function(){
    console.log('App is listening on port 3000');
});