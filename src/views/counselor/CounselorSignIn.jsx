import React, {Component} from 'react'
import "./CounselorSignIn.scss"
import {Grid, Card, CardContent, TextField, Typography, Button} from "@material-ui/core";
import logo from "../../assets/eu-logo.png"
import {signIn} from "../../actions/signInActions";

class CounselorSignIn extends Component {

    render() {
        return (
            <>
                <Grid container id="rootGrid">
                    <Grid xs={12} sm={8} md={6} lg={4}>
                        <Card className={'transparent'}>
                            <CardContent>
                                <Grid container id={'logoGrid'} className={"imgRaised"}>
                                    <Grid item>
                                        <img src={logo}/>
                                    </Grid>

                                    <Grid item xs={12} className={'brandText'}>
                                        <Typography>Euphoria</Typography>
                                    </Grid>

                                </Grid>
                                <hr/>
                                <Grid container id={'fieldGrid'} spacing={2}>
                                    <Grid item xs={8}>
                                        <TextField className={'txtFld-small'} variant={'outlined'} label={'Username'}  fullWidth/>
                                    </Grid>

                                    <Grid item xs={8}>
                                        <TextField className={'txtFld-small'} variant={'outlined'} type={'password'} label={'Password'} fullWidth/>
                                    </Grid>

                                    <Grid item xs={12} sm={10} id={'buttonGrid'} className={'verticalCenter spaceBetween'}>
                                        <Button> Forgot your password?</Button>
                                        <Button variant={"outlined"} color={"primary"} id={'signInBtn'} type={"submit"} >Sign In</Button>
                                    </Grid>

                                    <Grid item xs={12} className={'horizontalCenter'}>
                                        <Button className={'btn-small'}>Not a member? Join as a counselor today.</Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </>
        );
    };
}

export default CounselorSignIn;
// export default connect(null,{CounselorSignIn});