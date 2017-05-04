import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/Layout.jsx';

import axios from 'axios';

import store from './store.jsx';

store.subscribe(() => {
    console.log("store changed", store.getState());
});

// store.dispatch({type: "INC"});
// store.dispatch({type: "CHANGE_NAME", payload: "Henryk"});
// store.dispatch({type: "E"});
// store.dispatch((dispatch) => {
//     dispatch({type: 'DEC'});
//     //async
//     dispatch({type: 'CHANGE_TOWN', payload: 'Warsaw'});
// });


// store.dispatch((dispatch) => {
//     dispatch({type: 'FETCH_USERS_START'});
//     axios.get("http://rest.learncode.academy/api/wstern/users")
//         .then((respone) => {
//             dispatch({type: 'RECEIVE_USERS', payload: respone.data})
//         })
//         .catch((err)=> {
//             dispatch({type: "E", payload: err})
//         });
// });


// store.dispatch({
//     type: 'FETCH_USERS',
//     payload: axios.get("http://rest.learncode.academy/api/wstern/users"),
//         });


document.addEventListener("DOMContentLoaded", function(){

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app')
    );

});