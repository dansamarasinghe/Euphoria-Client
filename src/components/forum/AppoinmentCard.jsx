import React, {Component} from 'react'
// import { connect } from 'react-redux';

import {Button, Card, CardActions, CardContent, CardHeader, Container, Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

class AppoinmentCard extends Component {

    render() {
        return (
            <Grid item xs={4}>

                {/*Card-Start*/}
                <Card>
                    <CardHeader
                        title={this.props.customer}
                        subheader={this.props.username}
                    />

                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography color={"textSecondary"} style={{fontSize:"2em"}}>
                                    {this.props.time}
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Grid item xs={12}>
                                    <Typography style={{fontSize:"1em"}}>
                                        {this.props.date}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography style={{fontSize:"1em"}}>
                                        {this.props.status}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Typography variant={"body1"} color={"textPrimary"}>
                            {this.props.question}
                        </Typography>
                    </CardContent>

                    <CardActions style={{float:"right"}}>
                        <Button>Approve</Button>
                        <Button>Reject</Button>
                    </CardActions>
                </Card>
                {/*Card-End*/}

            </Grid>
        );
    };
}

export default AppoinmentCard;
// export default connect(null,{CounselorSignIn});