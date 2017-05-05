import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/Layout.jsx';

import axios from 'axios';

import store from './store.jsx';

store.subscribe(() => {
    console.log("store changed", store.getState());
});


document.addEventListener("DOMContentLoaded", function(){

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app')
    );

});