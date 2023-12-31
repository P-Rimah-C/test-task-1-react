import React from 'react';
import { Card, Container } from 'react-bootstrap';

const MyContainer = ({children, space, additional,   ...props}) => {
    return (
        <Container 
            className={`d-flex justify-content-center ${additional}`} 
            style={{minHeight: window.innerHeight - space}}
        >
            <Card {...props}>
                {children}
            </Card>
        </Container>
    );
}

export default MyContainer;