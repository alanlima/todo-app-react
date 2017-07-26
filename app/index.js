import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/index'

import './index.css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';

let store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));