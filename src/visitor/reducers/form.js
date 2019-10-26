import ActionTypes from '../actions/actionTypes';

const formReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SET_AID_TYPE:
            return { ...state, aidType: action.payload.aidType };
        case ActionTypes.SET_CALL_REASON:
            return { ...state, callReason: action.payload.callReason };
        case ActionTypes.ADD_EXTRA_DETAILS:
            return { ...state, extraDetails: action.payload.details };
        default:
            return state;
    }
};
export default formReducer;
