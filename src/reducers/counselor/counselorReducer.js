import * as actionTypes from '../../actions/types';

const initialState = {
    signedIn:false
};

export default function (state=initialState,action){
    switch(action.type){
        case  actionTypes.COUNSELOR_SIGN_IN:
            return {
                ...state,
                signedIn : true
            };
        default:
            return state;
    };
};
