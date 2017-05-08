import { combineReducers } from 'redux';

import userReducer from './userReducer.jsx';
import ageReducer from './ageReducer.jsx';
import dataReducer from './dataReducer.jsx';

const reducers = combineReducers({
    user: userReducer,
    age: ageReducer,
    data: dataReducer,
});

export default reducers;