import React, { Component } from 'react'
import {Row,Col,Card,Button} from 'react-bootstrap';
export default class Counselors extends Component {
    elements = ['one', 'two', 'three','four'];

    items = this.elements.map((index)=>
        <Col xs={4} >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
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
