 //importing or including express that was dowloaded from npmjs.com..here you can use require or import(expres) [// const express = require('express'); for commonjs...the import use below is for type modules done in the  package.json]
import express from 'express';
import todoRouter from './routes/todo.js';

// Create an express app
const app = express();

// Use routes
app.use(todoRouter)

// LIsten for incoming requests
app.listen(3000, function(){
    console.log('App is listening on port 3000');
});