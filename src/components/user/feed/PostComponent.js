import React, { Component } from 'react';
import {Card,Button,Image,Accordion} from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

// const Styles=styled.div`
//     .cardHeader1{
//         fontFamily:Georgia;
//         serif',fontSize:150%;
//         height:18rem;
//     }
//     .cardTitle1{
//         fontWeight:bold;
//         fontFamily:system-ui;
//     }
//     .cardText1{
//         fontFamily:'system-ui';
//     }
//     .card1{
//         backgroundColor:'white';
        
//     }

// `;
class CommentComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.comment.commented_user_id.firstname}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">what</Card.Subtitle>
                    <Card.Text>
                        {this.props.comment.comment_description}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}

class PostComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            com:[],
            comments:[],
            user:{}
        }
    }

    componentDidMount(){
        const x=this.props.post.comments;
        // this.setState({comments:this.props.post.comments.map});
        this.setState({com:x})
    }
    desc=['one','two','three','four']
    
    render() {
        const pic='me'
        // const all_comments=this.state.comments.map((comment)=>{
        //     return <CommentComponent comment={comment}></CommentComponent>
        // });
        console.log("prints");
        const all_comms=this.state.com.map((c)=>(<CommentComponent comment={c}></CommentComponent>));
        return (
            <React.Fragment>

                    <Card className="text-center">
                        
                        <Card.Header style={{fontFamily:'Georgia, serif',fontSize:'150%',height:''}} > 
                            <Image src={require('../../../assets/profile/'+pic+'.jpeg')} roundedCircle style={{margin:'20px',height:'81px',weight:'91px'}} /> 
                            {this.props.post.user_id.firstname}
                        </Card.Header>
                        <Card.Body>
                            <Card.Title style={{fontWeight:'bold',fontFamily:'system-ui'}}>{this.props.post.post_title}</Card.Title>
                            <Card.Text style={{fontFamily:'system-ui'}}>

                                {this.props.post.post_description}
                            </Card.Text>
                            <Accordion>
                                <Card style={{backgroundColor:'white'}}>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Comments
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body  style={{width:'150%'}}>
                                        {all_comms}
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>

                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>

            </React.Fragment>
        )
    }
}

export default PostComponent;