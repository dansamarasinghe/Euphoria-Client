import React, {Component} from 'react';
import {Button,Form} from 'react-bootstrap';
import Card from "../../components/admin/Card";

class AddAdminForm extends Component{
    constructor(props){
        super(props)
        this.state={

        }

    }
    addAdmin(){
        
    }
    render(){
        return(
            <div>
                <div className = "m-4">
                <Card
                title="Add New Administrator"
                category="Please fill out the form and click on SUBMIT"
                ctTableFullWidth
                ctTableResponsive
                content={
                    <Form>
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" placeholder="FirstName" />
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" placeholder="LastName" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>
                    
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicRadio">
                            <Form.Label>Active Status</Form.Label>
                            <Form.Check type="radio" label="Active" value='Active' />
                            <Form.Check type="radio" label="Inactive" value='Inactive' />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={()=>this.addAdmin()}> {/*add addAdmin() function */}
                        Submit
                        </Button>
                    </Form>
                }
                />
                </div>
            </div>
        );
    }
}

export default AddAdminForm;