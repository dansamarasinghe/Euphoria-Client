import * as actionTypes from '../types';

const axios = require('axios').default;

// Check if user is logged in.
(function () {
    let authToken = localStorage.getItem("JWT");
    if (authToken === null) {
        // This means that there ISN'T JWT and no user is logged in.
        axios.defaults.headers.common.Authorization = null;
    } else {
        // This means that there IS a JWT so someone must be logged in.
        axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    }
})();

export const signInSuccess = () => {
    return {
        type: actionTypes.COUNSELOR_SIGN_IN
    };
};

export const signUpSuccess = (response) => {
    return {
        type: actionTypes.COUNSELOR_SIGN_UP,
        response: response
    };
};