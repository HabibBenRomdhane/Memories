// inside of here we don't want to have some logic because 
// if we keep adding routes and adding more complex logic like this 
// our files for the routes is gonna get long and we're gonna get lost between
// all the logic and all the requests and at the end it's gonna be hard to see
// what routes you have access to
// to simplify that we can extract all the functions a put it in the controllers


import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router(); // setup the router

// http://localhost:5000/ : it's not reached
// http://localhost:5000/posts : it's reached for all the routes in here
// which means that we successfully connected our express app and we're running it on localhost:5000

router.get('/', getPosts);
router.get('/', createPost);


export default router;


