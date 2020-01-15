import React, {Component} from "react";
import {Button, Card, CardActions, CardContent, CardHeader, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

class PatientRecordCard extends Component {
    render() {
        return (
            <Grid item>

                {/*Card-Start*/}
                <Card>

                    <CardContent>
                        <Grid item className={"header"}>
                            <Typography variant={"subtitle1"}>
                                2019-12-31
                            </Typography>
                            <Typography variant={"h3"} style={{fontSize: "1.5em"}}>
                                Summary of the report
                            </Typography>
                        </Grid>
                        <hr style={{border:"1px solid"}}/>
                        <Grid item className={"record"}>
                            <Typography variant={"subtitle1"} color={"textSecondary"}>
                                Record
                            </Typography>
                            <Typography variant={"body1"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolorem doloremque
                                doloribus error, illo in magnam magni maxime nemo nisi quam quas reiciendis vel! Beatae
                                corporis
                                eaque harum molestias quis.
                            </Typography>
                        </Grid>
                        <hr/>
                        <Grid item className={"prescription"}>
                            <Typography variant={"subtitle1"} color={"textSecondary"}>
                                Prescription
                            </Typography>
                            <Typography variant={"body1"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolorem doloremque
                                doloribus error, illo in magnam magni maxime nemo nisi quam quas reiciendis vel! Beatae
                                corporis
                                eaque harum molestias quis.
                            </Typography>
                        </Grid>
                    </CardContent>

                    {/*<CardActions style={{float: "right"}}>*/}
                    {/*    <Button>Read More</Button>*/}
                    {/*</CardActions>*/}
                </Card>
                {/*Card-End*/}

            </Grid>
        );
    };

}

export default PatientRecordCard;