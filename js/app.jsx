import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/combinedReducers.jsx';
import logger from './middlewares/logger.jsx';
import error from './middlewares/error.jsx';

const middleware = applyMiddleware(logger, error);

const store = createStore(reducers, {}, middleware);

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "INC"});
store.dispatch({type: "DEC"});
store.dispatch({type: "CHANGE_NAME", payload: "Henryk"});
store.dispatch({type: "E"});


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