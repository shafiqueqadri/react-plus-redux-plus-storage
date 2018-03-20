import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import { productReducer } from './reducers/products';
import { userReducer } from './reducers/users';
import { fetch } from './storage';
import { USERS } from './fields';

const reducers = combineReducers({
    products : productReducer,
    users : userReducer
});

const store = createStore(
    reducers,
    {
        users: fetch(USERS),
        products: fetch(USERS)
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
