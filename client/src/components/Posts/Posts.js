import React from "react";
import Post from "./Post/Post.js";
import useStyles from './styles.js';


const Posts = () => {
    const classes = useStyles();

    return(
        // a React fragment so we can add multiple things in here
        <>
        <h1>POSTS</h1>
        <Post />
        <Post />
        </>
    );
}

export default Posts;