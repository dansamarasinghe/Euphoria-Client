import React, { Component } from 'react'
import {Row,Col,Card,Button} from 'react-bootstrap';
export default class Counselors extends Component {
    elements = [
        {
        "name":"Dr.Gregory House",
        "specialty":"diagnostician"
        },
        {
        "name":"Dr.William Chase",
        "specialty":"Neurologist"
        },
        {
        "name":"Dr.Cameron Chase",
        "specialty":"ER"
        },
    ];
    counselors=[];


    items = this.elements.map((doc)=>
        <Col xs={4} >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{doc.name}</Card.Title>
                        <Card.Subtitle>{doc.specialty}</Card.Subtitle>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">Request</Button>
                    </Card.Body>
                </Card>
        </Col>
    );
    
    

    render() {
        
        return (
            <div>
                <Row>
                    {this.items}
                </Row>
            </div>
        )
    }
}
