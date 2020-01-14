import React, { Component,useState } from 'react'
import {Modal,Button,ButtonToolbar,Form,Card,Image} from 'react-bootstrap'
function MyVerticallyCenteredModal(props) {
    const [msg,setMsg]=useState('');
    const handleChange=(e)=>{
       setMsg(e.target.value);
       console.log(e.target.value);
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                    <Image variant="top" src={require('../../assets/img/doctor/'+props.doc.picName+'.jpg')} 
                            style={{
                                margin:'20px',
                                width: '90px',
                                height: '85px',
                                objectFit:'cover'}}
                            roundedCircle
                    />
                {props.doc.counselor_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 style={{margin: 'auto',width: '50%',padding: '10px'}}>Message To Counselor</h4>
          <Form.Control as="textarea" onChange={handleChange} placeholder="Type a message to your counselor" rows="3" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={()=>{props.makeRequest(msg)}} style={{margin:'20px'}}>Send</Button>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}
export default class CounselorRequestModal extends Component {
    constructor(props){
        super(props);
        this.state={
            modalShow:false
        }
    }
    render() {
        return (
            <ButtonToolbar>
              <Button variant="primary" onClick={() => this.setState({modalShow:true})}>
                Request
              </Button>
        
              <MyVerticallyCenteredModal
                show={this.state.modalShow}
                onHide={() => this.setState({modalShow:false})}
                doc={this.props.doc}
                makeRequest={this.props.makeRequest}
              />
            </ButtonToolbar>
          );
    }
}
