import React, { Component } from 'react'
import PostComponentUser from '../../components/user/PostComponentUser'
import AddPost from '../../components/user/feed/AddPost'
import {Row,Col} from 'react-bootstrap'
import PostComponent from '../../components/user/feed/PostComponent'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';


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
        const {history}=this.props;
        
        const posts=this.state.posts.map((post)=>(<div key={post.user_id.uid} style={{margin:'20px'}}><PostComponent style={{display:'flex'}} post={post}></PostComponent></div>));
        return (
            <React.Fragment>
                {/* <Row></Row>
                <Row>
                    <Col xs={3}></Col>
                    <Col xs={6} container>
                        <Row>
                            {posts}
                        </Row>
                    </Col>
                    <Col xs={3}></Col>
                </Row> */}
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        {posts}
                    </Grid>
                    <Grid item xs={2}>
                        <AddPost></AddPost>
                    </Grid>
                </Grid>
            </React.Fragment>

                
        )
    }
}

export default Feed;