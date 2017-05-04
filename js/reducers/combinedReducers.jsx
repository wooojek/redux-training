import { combineReducers } from 'redux';

import userReducer from './userReducer.jsx';
import ageReducer from './ageReducer.jsx';

const reducers = combineReducers({
    user: userReducer,
    age: ageReducer,
});

export default reducers;