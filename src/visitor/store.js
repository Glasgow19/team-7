import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import rootReducer from './reducers/root';

export default configureStore =>
    createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));
