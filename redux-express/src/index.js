import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reduxPromise from 'redux-promise';

// 1. In order to use React with Redux, we need react-redux.
import { Provider } from 'react-redux'; //this is our glue between react and redux

// 2. create a redux store, so that:
// 2.1. Redux exists
// 2.2. The Proivider has that store
// 2.3.1. We NEED some middleware.
// Redux comes with an functio called applyMiddleware
import { createStore, applyMiddleware } from 'redux';

// 3. reducers to populate the store
// 3.1. reducers go into the rootReducer
// 3.2. Make indidivual reducers to go into the rootreducer
import rootReducer from './reducers/rootReducer';

// 4. acutally create the store (2) by passing it the 
// rootReducer (3) which is made up of the indidvual reducers
// 4.1.1. - to use middleware, we intercept createstore
const theStoreWithSomeMiddleware = applyMiddleware(reduxPromise)(createStore)(rootReducer);
// const appliedMiddelware = applyMiddleware()
// const newStore =  appliedMiddelware(createStore);
// const finalStore= newStore(rootReducer)
// const aPublix = createStore(rootReducer);
// WOOHOO! WE MADE A STORE. REDUX IS READY!

// Provider (1) is the component that glues React and Redux together
// We hand the Prodiver to ReactDOM.render, 
//and we hand the Provider a prop of store, with our Store
ReactDOM.render(
    <Provider store={theStoreWithSomeMiddleware}>
        <App />
    </Provider>,
    document.getElementById('root')
);
