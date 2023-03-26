import * as api from '../api'; // import everything from the actions as api 

// api.fetchPosts
// Action Creators are functions that return an action and action have type and payload
export const getPosts = () => async (dispatch) => {
    try {
        // fetch all the data from the api and then sending that data through the action.payload
        const { data } = await api.fetchPosts(); // { data } a data object, which represents the posts, is the response from the api which we are returning from the backend

        dispatch({ type: 'FETCH_ALL', payload: data })
        // now we are successfully using redux to pass or dispatch an action from the data from our backend
    } catch (error) {
        console.log(error.message);
    }
}

// actions is an object must have a type property and payload is the data where we store our posts
// const action = { type: 'FETCH_ALL', payload: [] }

// return action;
// dispatch(action);


// we are working with async data to actually fetch all the posts sometime is gonna have to pass and for that we have to use redux thunk
// redux thunk allows us to specify an additional arrow function async (dispatch) and as property we get access to dispatch
// and instead of return the action with redux thunk we have to dispatch it