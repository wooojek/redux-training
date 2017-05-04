import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import reducers from './reducers/combinedReducers.jsx';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import error from './middlewares/error.jsx';

const middleware = applyMiddleware(promise(), thunk, logger, error);

const store = createStore(reducers, middleware);

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


store.dispatch({
    type: 'FETCH_USERS',
    payload: axios.get("http://rest.learncode.academy/api/wstern/users"),
        });


document.addEventListener("DOMContentLoaded", function(){

    class App extends React.Component {
        render() {
            return <div>
                    Hello
                </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );

});