// we're gonna create all the handlers for our routes
import PostMessage from "../models/postMessage.js";


export const getPosts = async (req, res) => {
    try{
        // find something inside of a model takes time which means that is async action
        // so we have to add await and make the function asynchronous
        const postMessages = await PostMessage.find(); 

        // console.log(postMessages);
        // return of the function if everything went ok
        res.status(200).json(postMessages); // an array of all messages that we have
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);
   try {
    await newPost.save();
    
    // https://wwwrestapi.com/httpstatuscodes.html
    res.status(201).json(newPost); // 201 successful creation then .json we're gonna send that new post in.

   } catch (error) {
    res.status(409).json({ message: error.message });
}
}