import React, {Component} from 'react'
import {Button, Card, CardActions, CardContent, CardHeader, Container} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import {Form, Image, Nav, Navbar} from "react-bootstrap";
import Logo from '../../assets/eu-logo.png';

// import { connect } from 'react-redux';

class CounselorSignIn extends Component {

    render() {
        return (
            <>
                {/*Body-Start*/}
                <Container maxWidth="lg">
                    <Card>
                        <CardHeader
                            title={"Question Title"}
                            subheader={Date().toLocaleString()}
                        />

                        <CardContent>
                            <Typography variant={"body1"} color={"textPrimary"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus dignissimos,
                                distinctio ducimus eius facilis harum id incidunt magni nesciunt nihil obcaecati
                                pariatur
                                provident quae ratione tenetur vel, velit vitae.
                            </Typography>
                            <Typography variant={"body1"} color={"textPrimary"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus dignissimos,
                                distinctio ducimus eius facilis harum id incidunt magni nesciunt nihil obcaecati
                                pariatur
                                provident quae ratione tenetur vel, velit vitae.
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button>Answer</Button>
                            <Button>Watch</Button>
                        </CardActions>
                    </Card>
                </Container>
                {/*Body-End*/}

            </>
        );
    };
}

export default CounselorSignIn;
// export default connect(null,{CounselorSignIn});