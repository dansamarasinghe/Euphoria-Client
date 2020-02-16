import {combineReducers} from 'redux';
import signInReducer from './signInReducer';
import counselorReducer from './counselor/counselorReducer';

export default combineReducers({
    sign : signInReducer,
    counselorReducer : counselorReducer
});
