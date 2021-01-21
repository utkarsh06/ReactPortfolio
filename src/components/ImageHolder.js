import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function ImageHolder() {
    return (
        <Container fluid = {true}>
                <Row>
                    <Col xs={9} md={12}>
                        <Image src="../assets/images/UtkarshGaur.jpg" rounded />
                    </Col>
                </Row>
        </Container>
    );
    
}


export default ImageHolder;