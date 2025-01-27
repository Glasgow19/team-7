import ActionTypes from '../actions/actionTypes';

const formReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SET_AID_TYPE:
            return { ...state, aidType: action.payload.aidType };
        case ActionTypes.SET_CALL_REASON:
            return { ...state, callReason: action.payload.callReason };
        case ActionTypes.ADD_EXTRA_DETAILS:
            return { ...state, extraDetails: action.payload.details };
        case ActionTypes.SET_HEALTH_ASSISTANCE_DETAILS:
            return { ...state, healthDetails: action.payload.details };
        case ActionTypes.ADD_FEEDBACK_SCORE:
            return { ...state, feedbackScore: action.payload.score };
        case ActionTypes.ADD_FEEDBACK_DETAILS:
            return { ...state, feedbackDetails: action.payload.feedbackDetails };
        case ActionTypes.CLEAR_FORM_STORE:
            return {};
        default:
            return state;
    }
};
export default formReducer;
