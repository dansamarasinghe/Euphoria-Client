import axios from 'axios';


export function userNewPost(postData){
    return dispatch=>{
        console.log('what about');
        return axios.post('http://localhost:8080/api/user/newpost',JSON.stringify(postData),{headers: {
            'Content-Type': 'application/json',
        }})
        .then((response)=>console.log(response))
;
    }
}