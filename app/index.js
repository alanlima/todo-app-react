import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import './index.css'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todoApp from './reducers/index'

const setupStore = () => {
     const middlewares = [thunk];

     if(process.env.NODE_ENV === 'dev'){
         const logger = require('redux-logger');
         middlewares.push(logger.createLogger());
     }

     return createStore(
         todoApp,
         {},
         applyMiddleware(...middlewares)
     )
}

let store = setupStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));