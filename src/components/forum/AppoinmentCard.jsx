import React, {Component} from 'react'
// import { connect } from 'react-redux';

import {Button, Card, CardActions, CardContent, CardHeader, Container, Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

class AppoinmentCard extends Component {

<<<<<<< HEAD

    handleClick=()=>{
        this.setState({'status':'Approved'})
    }
=======
>>>>>>> 8400a83f465339a67514b81bb9d6de5b6afcbbeb
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
<<<<<<< HEAD
                        <Button onClick={this.handleClick}>Approve</Button>
=======
                        <Button>Approve</Button>
>>>>>>> 8400a83f465339a67514b81bb9d6de5b6afcbbeb
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