import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron';

function Branding(props){
    console.log(props.title);
    return(
        <Jumbotron className = "bg-transparent">
            <Container fluid = {true} >
                <Row className = "justify-content-left py-5">
                    <Column md = {8} sm = {12}>
                        { props.title && <h1 className = "display-1 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h2 className = "display-4 font-weight-light">{props.subTitle}</h2> }
                        { props.text && <h4>{props.text}</h4> }
                    </Column>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Branding;