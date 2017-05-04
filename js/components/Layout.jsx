import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        user: store.user.name,
    };
})
class App extends React.Component {
    render() {
        console.log(this.props);
        return <div>
                Hello
            </div>;
    }
}

export default App;