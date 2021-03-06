import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Middle from './middleComp.jsx';

@connect((store) => {
    return {
        user: store.user,
        data: store.data,
    };
}, actions)
class App extends React.Component {

    componentWillMount() {
        console.log(this.props.data);
    }
    render() {
        return <Middle/>;
    }
}

export default App;