import ActionTypes from './actionTypes';

export default {
    updateUser: user => ({
        type: ActionTypes.UPDATE_USER,
        payload: { user },
    }),
    logoutUser: () => ({ type: ActionTypes.LOGOUT_USER }),
};
