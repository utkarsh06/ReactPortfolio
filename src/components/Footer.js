import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';



function footer(){


    return(
        <footer className = "mt-5">
            <Container fluid = {true}>
                <Row className = "border-top justify-conten-between p-3">
                    <Column className = "p-0" md = {3} sm = {12}  >
                        Utkarsh Gaur
                    </Column>
                    <Column className = "p-0 d-flex justify-content-end">
                    This was website was build by Utkarsh Gaur
                    </Column>
                </Row>
            </Container>
        </footer>

    );
}

export default footer