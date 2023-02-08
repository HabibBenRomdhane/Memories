import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js';


// const express = require('express'); this is the usual syntax but in the newest versions of node we can use the import syntax
// and to enable it you have to add type : "module" in the package.json below the "main" line.

const app = express(); // initilize app

app.use(bodyParser.json({ limit: '30mb', extended: true })); // limit 30mb because we're gonna send some images which can be large in size.
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes); // every route inside of the postRoutes is gonna start with posts

// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = 'mongodb+srv://memoriesapp:memoriesapp123@cluster0.qylf3uk.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}) // to connect to DB 
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))) // if connection successful
    .catch((error) => console.log(error.message)); // if connection not successful

// mongoose.set('useFindAndModify', false);  // to make sure that we don't get any warnings in the console
mongoose.set('strictQuery', true);