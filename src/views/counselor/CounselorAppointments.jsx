import React, {Component} from "react";
import CounselorNavBar from "../../components/counselor/CounselorNavBar";
import {Container, Grid} from "@material-ui/core";
import ForumQuestionCard from "../../components/forum/QuestionCard";
import AppoinmentCard from "../../components/forum/AppoinmentCard";

class CounselorAppointments extends Component {
    render() {
        return (
            <>

                <CounselorNavBar></CounselorNavBar>

                <Container>
                    <Grid container>
                        <AppoinmentCard
                            customer={"Missaka Iddamalgoda"}
                            username={"@Misidda"}
                            time={"8:00 AM"}
                            date={"2019-11-20"}
                            status={"Pending"}
                        >
                        </AppoinmentCard>
                    </Grid>
                </Container>


            </>
        );
    };
}

export default CounselorAppointments;
