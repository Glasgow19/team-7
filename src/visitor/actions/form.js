import ActionTypes from './actionTypes';

export default {
    setAidType: aidType => {
        return {
            type: ActionTypes.SET_AID_TYPE,
            payload: { aidType },
        };
    },
    setCallReason: callReason => {
        return {
            type: ActionTypes.SET_CALL_REASON,
            payload: { callReason },
        };
    },
    addExtraDetails: details => {
        return {
            type: ActionTypes.ADD_EXTRA_DETAILS,
            payload: { details },
        };
    },
    setHealthAssistanceDetails: details => {
        return {
            type: ActionTypes.SET_HEALTH_ASSISTANCE_DETAILS,
            payload: { details },
        };
    },
    addFeedbackScore: score => {
        return {
            type: ActionTypes.ADD_FEEDBACK_SCORE,
            payload: { score },
        };
    },
    addFeedbackDetails: feedbackDetails => {
        return {
            type: ActionTypes.ADD_FEEDBACK_DETAILS,
            payload: { feedbackDetails },
        };
    },
    clearFormStore: () => {
        return {
            type: ActionTypes.CLEAR_FORM_STORE,
        };
    },
};
