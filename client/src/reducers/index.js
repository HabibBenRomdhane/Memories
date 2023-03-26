import { combineReducers } from 'redux';

import posts from './posts.js';

export default combineReducers({ 
    posts // posts : posts considering both the key and the value have the same name we can keep the first one
});
