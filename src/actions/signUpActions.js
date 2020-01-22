import axios from 'axios';


export function userSignUpRequest(userData){
    return dispatch=>{
        return axios.post('http://localhost:8080/api/users',JSON.stringify(userData),{headers: {
            'Content-Type': 'application/json',
        }})
        .then((response)=>console.log(response))
;
    }
}