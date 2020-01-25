import React, { Component } from 'react';
import {Card,Button,Image,Accordion} from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

class LongText extends Component { 
    state = { showAll: false }
    showMore = () => this.setState({showAll: true}); 
    showLess = () => this.setState({showAll: false});
    render() {
        const {content, limit} = this.props;
        const {showAll} = this.state;
        if(content.length<=limit) {
            // there is nothing more to show
            return <div>{content}</div>
        }
        if(showAll) {
            // We show the extended text and a link to reduce it
            return <div>
                {content}
                <a><span onClick={this.showLess} style={{color:'blue',cursor:'pointer'}}> Read less </span></a>
            </div>
        }
        // In the final case, we show a text with ellipsis and a `Read more` button
        const toShow = content.substring(0,limit)+"... ";
        return <div>
            {toShow}<a><span onClick={this.showMore} style={{color:'blue',cursor:'pointer'}}>Read more </span></a>
        </div>
    }
}
class CommentComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){   
        const pic=this.props.comment.commented_user_id.pic_name;
        return(
            <Card style={{ width: '100%' }}>
                <div style={{float:'left'}}>
                    <Card.Body style={{float:'left'}}>
                        <div >
                            <div style={{float:'left'}}>
                                <Image src={require('../../../assets/profile/'+pic+'.jpeg')} roundedCircle style={{margin:'20px',height:'41px',weight:'51px'}} /> 
                            </div>
                            <div className="d-flex flex-column">
                                <Card.Title>{this.props.comment.commented_user_id.firstname}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{this.props.comment.comment_age}</Card.Subtitle>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <Card.Text>
                                {this.props.comment.comment_description}
                            </Card.Text>
                        </div>
                        <div>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </div>
                    </Card.Body>
                </div>    
            </Card>
        )
    }
}

class PostComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            coms:[],
            user:{}
        }
    }

    componentDidMount(){
        const x=this.props.post.comments;
        const u=this.props.post.user_id;
        this.setState({coms:x,user:u})
    }
    componentDidUpdate(){
        console.log("when do I come into play")
    }
    render() {
        const pic=this.props.post.user_id.pic_name;
        console.log()
        const all_comms=this.state.coms.map((c)=>(<div key={c.comment_id} style={{float:'left',width:'100%'}}><CommentComponent comment={c}></CommentComponent></div>));
        return (
            <React.Fragment>

                    <Card className="text-center" >
                        
                        <Card.Header style={{fontFamily:'Georgia, serif',fontSize:'150%',height:''}} > 
                            <Image src={require('../../../assets/profile/'+pic+'.jpeg')} roundedCircle style={{margin:'20px',height:'81px',weight:'91px'}} /> 
                            {this.props.post.user_id.firstname}
                        </Card.Header>
                        <Card.Body>
                            <Card.Title style={{fontWeight:'bold',fontFamily:'system-ui'}}>{this.props.post.post_title}</Card.Title>
                            <Card.Text style={{fontFamily:'system-ui'}}>
                                <LongText content={this.props.post.post_description} limit={250}></LongText>
                                {/* {this.props.post.post_description} */}
                            </Card.Text>
                            <Accordion>
                                <Card style={{backgroundColor:'white'}}>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        <Button variant="outline-primary">Comments</Button>
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
                        <Card.Footer className="text-muted">{this.props.post.post_age}</Card.Footer>
                    </Card>

            </React.Fragment>
        )
    }
}

export default PostComponent;