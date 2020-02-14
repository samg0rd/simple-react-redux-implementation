import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';


// REDUX IMPLEMENTATION
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import counterReducer from './store/reducers/counter';
import albumsReducer from './store/reducers/albums';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    counter: counterReducer,
    albums: albumsReducer    
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
