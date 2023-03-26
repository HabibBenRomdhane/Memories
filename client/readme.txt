* npx create-react-app ./

* npm i axios moment react-file-base64 redux redux-thunk
install all the necessary dependencies.
axios: for making api requests.
moment: moment.js is a library for working with time and date.
react-file-base64:  we will use this to convert our images.
redux: the state management of the application.
redux-thunk: is used for asynchronous actions using redux.

* npm i @material-ui/core
it is very popular when working with React, it allows you to create a nice looking applications without a lot of styling.

add redux capabilities because all actions towards our backend are going to be done using redux and we need to dispatch those actions.
it makes the applications scalable that means that as our app grows we'll be using the same old consistency redux offers us.

* The first thing to ask is, "what is Redux?"

Redux is really:

A single store containing "global" state
Dispatching plain object actions to the store when something happens in the app
Pure reducer functions looking at those actions and returning immutably updated state
While it's not required, your Redux code also normally includes:

Action creators that generate those action objects
Middleware to enable side effects
Thunk functions that contain sync or async logic with side effects
Normalized state to enable looking up items by ID
Memoized selector functions with the Reselect library for optimizing derived data
The Redux DevTools Extension to view your action history and state changes
TypeScript types for actions, state, and other functions
Additionally, Redux is normally used with the React-Redux library to let your React components talk to a Redux store.
What Does the Redux Core Do?
The Redux core is a very small and deliberately unopinionated library. It provides a few small API primitives:

createStore to actually create a Redux store
combineReducers to combine multiple slice reducers into a single larger reducer
applyMiddleware to combine multiple middleware into a store enhancer
compose to combine multiple store enhancers into a single store enhancer

npm i react-redux