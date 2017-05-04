import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducers from './reducers/combinedReducers.jsx';

const store = createStore(reducers);

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "CHANGE_NAME", payload: "Henryk"});


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