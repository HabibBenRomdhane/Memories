import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
// provider is going to keep track of that store which is that global state 
// and that allows us to access that store from anywhere inside of the app
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
// import './index.css';

// to set redux we have to set store
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    // that's it our app is successfully using redux
    <Provider store={store}> 
        <App />
    </Provider>,
    document.getElementById('root')); // we're connecting to the div with an id of root

// we're gonna initialize redux here

// another method to render the app
// import { createRoot } from 'react-dom';

// const rootContainer = document.getElementById('root');

// createRoot(rootContainer).render(<App />);