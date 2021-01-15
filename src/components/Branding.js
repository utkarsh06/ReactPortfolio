import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron';

function Branding(props){

    return(
        <Jumbotron>
            <Container>
                <Row>
                    <Column>
                        { props.title && <h2>{props.title}</h2> }
                        { props.subTitle && <h3>{props.subTitle}</h3> }
                        { props.text && <h4>{props.text}</h4> }
                    </Column>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Branding;