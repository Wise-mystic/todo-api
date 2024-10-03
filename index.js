 //importing or including express that was dowloaded from npmjs.com..here you can use require or import(expres) [// const express = require('express'); for commonjs...the import use below is for type modules done in the  package.json]
import express from 'express';
import mongoose from 'mongoose';
import todoRouter from './routes/todo.js';
import userRouter from './routes/user.js';
import cors from 'cors'

// connect to data base
await mongoose.connect(process.env.MONGO_URI);

// Create an express app
const app = express();

// use middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use(todoRouter);
app.use(userRouter);

// LIsten for incoming requests
app.listen(3000, function(){
    console.log('App is listening on port 3000');
});