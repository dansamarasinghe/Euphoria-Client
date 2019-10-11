import {SIGN_IN} from './types';

const axios = require('axios');

export const signIn = (v) =>dispatch=>{
    console.log(v);
    axios.get('/login?loginname=dan&password=joy')
    
}