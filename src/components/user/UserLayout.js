import React from 'react';
import {Container} from 'react-bootstrap';

export function UserLayout (props){
    return(
        <Container>
            {props.children}
        </Container>
        
    );
}