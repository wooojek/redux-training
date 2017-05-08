import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

@connect((store) => {
    return {
        user: store.user,
        data: store.data,
    };
}, actions)
class App extends React.Component {

    componentWillMount() {
        console.log(this.props.data);
        this.props.fetchData();
    }
    render() {
        return <div>
                Hello
            </div>;
    }
}

export default App;