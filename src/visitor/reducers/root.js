import { combineReducers } from 'redux';
import userReducer from './user';
import formReducer from './form';

const rootReducer = combineReducers({
    user: userReducer,
    form: formReducer,
});

export default rootReducer;
