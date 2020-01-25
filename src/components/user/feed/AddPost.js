import React, { Component,useState} from 'react'
import {Modal,Button,ButtonToolbar,Form,Card,Image} from 'react-bootstrap'
import { Plus } from 'react-bootstrap-icons';
import {CreatePostStyles as styles} from '../../../assets/Styles'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class AddPost extends Component {
  render() {
    return (
      <Card>
                <Card.Body>
                        <div style={{border:'3px',padding:'0em 4em'}}>
                            <Card.Title>Add Post</Card.Title>
                        </div>
                        <div style={{border:'3px',padding:'2em 4em'}}>
                            <CreatePostModal></CreatePostModal>
                        </div>
                </Card.Body>
        </Card>
    )
  }
}



function MyVerticallyCenteredModal(props) {
    const [msg,setMsg]=useState('');
    const [state, setState] = React.useState({
        anxious: false,
        depressed: false,
        suicidal: false,
        sad: false,
        stressed: false,
        other: false
      });
    const handleChange=(e)=>{
       setMsg(e.target.value);
       console.log(e.target.value);
    }
    const handleCheck = name => event => {
        setState({ ...state, [name]: event.target.checked });
        // console.log(state);
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                    <Image variant="top" src={require('../../../assets/profile/girl.jpeg')} 
                            style={{
                                margin:'20px',
                                width: '90px',
                                height: '85px',
                                objectFit:'cover'}}
                            roundedCircle
                    />
               Add New Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <div className={styles.root}>
                <TextField
                id="standard-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
          </div>

          <Form.Control as="textarea" onChange={handleChange} placeholder="Type a message to your counselor" rows="3" />

          <div>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.anxious}
                            onChange={handleCheck('anxious')}
                            value="anxious"
                            color="primary"
                        />
                    }
                label="Anxious"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.depressed}
                            onChange={handleCheck('depressed')}
                            value="depressed"
                            color="primary"
                        />
                    }
                label="Depressed"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.suicidal}
                            onChange={handleCheck('suicidal')}
                            value="suicidal"
                            color="primary"
                        />
                    }
                label="Suicidal"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.sad}
                            onChange={handleCheck('sad')}
                            value="sad"
                            color="primary"
                        />
                    }
                label="Sad"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.stressed}
                            onChange={handleCheck('stressed')}
                            value="stressed"
                            color="primary"
                        />
                    }
                label="Stressed"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.other}
                            onChange={handleCheck('other')}
                            value="other"
                            color="primary"
                        />
                    }
                label="Other"
                />
            </FormGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info"  style={{margin:'20px'}}>Send</Button>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}
class CreatePostModal extends Component {
    constructor(props){
        super(props);
        this.state={
            modalShow:false
        }
    }
    render() {
        return (
            <ButtonToolbar>
              <Button variant="light" onClick={() => this.setState({modalShow:true})}>
              <Plus size={70}></Plus>
                Request
              </Button>
              <MyVerticallyCenteredModal
                show={this.state.modalShow}
                onHide={() => this.setState({modalShow:false})}
        
                
              />
            </ButtonToolbar>
          );
    }
}
