import mongoose, { Schema } from "mongoose";

// a schema : with mongodb you can create documents that looks differents 
// it can have the title and the message or it can have the message
// mongoose allows us some sort of uniformity to our documents
// we're gonna specify that each post is going to have these things
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String], // an array of strings
    selectedFile: String, // convert an img into string using base64
    likeCount: {
        type: Number,
        default: 0
    }, // we set it to an object because we have to add addittional information
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// Now we have a Schema we have to turn it to a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;

// we are exporting a mongoose model from the post message file 
// and then on that model we can run commnads such as find, create, delete and update.