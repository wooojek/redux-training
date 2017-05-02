import React from 'react';
import ReactDOM from 'react-dom';

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