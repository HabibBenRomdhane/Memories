import axios from 'axios'; // we're gonna use it to make api calls 

const url = 'http://localhost:5000/posts'; // this is the url pointing to our backend route

export const fetchPosts = () => axios.get(url); // get all the posts that we have in the database