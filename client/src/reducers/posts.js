// what are reducers : a reducer is a function that accepts the state and the action
// state = posts and we have to initialize it because in reducers the state always have to be eqaul to something
// our posts is gonna be an array

const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL': // for fetching all the posts
            return action.payload; // action.payload are our actual posts
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}  