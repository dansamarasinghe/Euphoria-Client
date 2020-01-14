import React, { Component } from 'react'
import PostComponentUser from '../../components/user/PostComponentUser'
import {Row,Col} from 'react-bootstrap'
import PostComponent from '../../components/user/feed/PostComponent'
import axios from 'axios';
class Feed extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }
        

    componentDidMount=()=>{
        axios.get('http://localhost:8080/api/user/getposts',{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res=>{
            console.log("user id is ");
            console.log(res.data)
            this.setState({posts:res.data})
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {
            
        const posts=this.state.posts.map((post)=>(<PostComponent style={{display:'flex'}} post={post}></PostComponent>));
        return (
            <React.Fragment>
                <Row></Row>
                <Row>
                    <Col xs={3}></Col>
                    <Col xs={6}>
                        <Row>
                            {posts}
                        </Row>
                    </Col>
                    <Col xs={3}></Col>
                </Row>

            </React.Fragment>

                
        )
    }
}

export default Feed;