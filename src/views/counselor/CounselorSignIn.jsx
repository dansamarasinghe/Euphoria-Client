import React, {Component} from 'react';
import "./CounselorSignIn.scss";
import {Grid, Card, CardContent, TextField, Typography, Button} from "@material-ui/core";
import logo from "../../assets/eu-logo.png";
import {connect} from 'react-redux';
import * as actions from "../../actions/index";
        
class CounselorSignIn extends Component {

    constructor(props) {
        super(props);
    };

    state = {
        username: null,
        password: null,
        signIn: null
    };

    signIn = () => {
        console.log(this.state.username, this.state.password);
        const signInCredentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.signIn(signInCredentials);
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    componentDidUpdate() {
        if(this.props.signedIn){
            this.props.history.push("/counselor/appointments");
        }
    };


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
                                        <TextField id={'username'}
                                                   onChange={e => this.handleChange(e)}
                                                   className={'txtFld-small'}
                                                   variant={'outlined'}
                                                   label={'Username'}
                                                   fullWidth
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <TextField
                                            id={'password'}
                                            onChange={e => this.handleChange(e)}
                                            className={'txtFld-small'}
                                            variant={'outlined'}
                                            type={'password'}
                                            label={'Password'}
                                            fullWidth/>
                                    </Grid>

                                    <Grid item xs={12} sm={10} id={'buttonGrid'}
                                          className={'verticalCenter spaceBetween'}>
                                        <Button> Forgot your password?</Button>
                                        <Button
                                            variant={"outlined"}
                                            color={"primary"}
                                            id={'signInBtn'}
                                            type={"submit"}
                                            onClick={() => this.signIn()}
                                        >
                                            Sign
                                            In
                                        </Button>
                                    </Grid>

                                    <Grid item xs={12} className={'horizontalCenter'}>
                                        <Button className={'btn-small'}>Not a member? Join as a counselor
                                            today.</Button>

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

const mapStateToProps = state => {
    return {
        signedIn: state.counselorReducer.signedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signIn: (state) => dispatch(actions.signIn(state)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounselorSignIn);
// export default connect(null,{CounselorSignIn});
