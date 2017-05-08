import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { fetchData } from '../actions/index.js'; 

@connect((store) => {
    return store;
})
class App extends React.Component {

    componentWillMount() {
        console.log(this.props.data);
    }
    render() {
        return <div>
                Hello
            </div>;
    }
}

export default App;