import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

@connect((store) => {
    return {
        user: store.user.name,
    };
})
class App extends React.Component {

    componentWillMount() {
        this.props.fetchData();
    }
    render() {
        console.log(this.props);
        return <div>
                Hello
            </div>;
    }
}

export default App;