import React, {Component} from "react";
import CounselorNavBar from "../../components/counselor/CounselorNavBar";
import {Container, Grid} from "@material-ui/core";
import ForumQuestionCard from "../../components/forum/QuestionCard";
import AppoinmentCard from "../../components/forum/AppoinmentCard";
<<<<<<< HEAD
import axios from 'axios';

class CounselorAppointments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            'name':'',
            'status':'',
            'username':''

        };
    }

     componentDidMount() {
        axios.post('http://localhost:8080/api/user/sign',JSON.stringify(this.state),{headers: {
            'Content-Type': 'application/json',
        }})
        .then((response)=>{
          if(response.data){
              this.setState({'name':'Danny','status':'pending','username':'@danny'})
              alert("request has been made");
          }else{
          }
        }) 
    }

    onFetchComplete(res){
        for (let i=0; i<res.length; i++){
            var obj = res[i];


        }
    }

=======

class CounselorAppointments extends Component {
>>>>>>> 8400a83f465339a67514b81bb9d6de5b6afcbbeb
    render() {
        return (
            <>

                <CounselorNavBar></CounselorNavBar>

                <Container>
                    <Grid container>
                        <AppoinmentCard
<<<<<<< HEAD
                            customer={this.state.name}
                            username={this.state.username}
                            time={"8:00 AM"}
                            date={"2019-11-20"}
                            status={this.state.status}
=======
                            customer={"Missaka Iddamalgoda"}
                            username={"@Misidda"}
                            time={"8:00 AM"}
                            date={"2019-11-20"}
                            status={"Pending"}
>>>>>>> 8400a83f465339a67514b81bb9d6de5b6afcbbeb
                        >
                        </AppoinmentCard>
                    </Grid>
                </Container>


            </>
        );
    };
}

export default CounselorAppointments;
