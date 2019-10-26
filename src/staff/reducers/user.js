import ActionTypes from '../actions/actionTypes';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_USER:
            return { ...state, user: action.payload.user };
        case ActionTypes.LOGOUT_USER:
            return { ...state, user: undefined };
        default:
            return state;
    }
};
export default userReducer;
