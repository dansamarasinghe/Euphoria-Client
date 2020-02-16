import React, {Component} from "react";
import CounselorNavBar from "../../components/counselor/CounselorNavBar";
import {Grid, Typography} from "@material-ui/core";
import PatientRecordCard from "../../components/counselor/PatientRecordCard";
import ProfileInfoCard from "../../components/ProfileInfoCard";

class CounselorViewPatientRecords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }


    render() {
        return (
            <>

                <CounselorNavBar></CounselorNavBar>

                <Grid container direction={"column"} style={{padding:"1em"}}>
                    <Grid container>
                        <Grid style={{marginBottom:"1em"}}>
                            <Typography variant={"h1"} style={{fontSize: "2em"}}>
                                {"Patient Records"}
                            </Typography>
                            {/*<Typography variant={"h2"} style={{fontSize: "1em"}}>
                                {"Missaka Iddamalgoda"}
                            </Typography>*/}
                        </Grid>
                    </Grid>
                    <Grid container direction={"row"} spacing={1}>
                        <Grid item xs={12} sm={3}>
                            {/** TODO: pass props to these  */}
                            <ProfileInfoCard ></ProfileInfoCard>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                                <PatientRecordCard></PatientRecordCard>
                        </Grid>
                    </Grid>
                </Grid>

            </>
        );
    };

}

export default CounselorViewPatientRecords;