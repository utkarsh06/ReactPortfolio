import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ReactRoundImage from "react-rounded-image";

import ProfileImage from "../assets/images/UtkarshGaur.jpg";

function AboutMe(props){
return (
        
        <Container fluid = {true}>
            <Row clasName = "justify-content-center">
                <Col className = "justify-content-center">
                    <ReactRoundImage image = {ProfileImage} />
                </Col>
                <Col>
                    {props.children}
                </Col>

            </Row>
        </Container>
        
    );

}

export default AboutMe;