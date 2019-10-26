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
};
