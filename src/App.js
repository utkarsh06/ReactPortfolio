
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarBrand } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      title: 'Utkarsh Gaur',
      headerLinks:[
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: "Perseverence",
        subTitle: "Projects",
        text: "Checkout my projects below"
      },
      about: {
        title: "About me",
      },
      contact: {
        title: "Contact me",
      }
    }

  }
  
  render() {
    return (
      <Router>
        <Container className = "p-0" fluid = {true}>
          <navbar className = "border-bottom">
            <Navbar.Brand>Utkarsh Gaur </Navbar.Brand>
            <Navbar.Toggle aria-controls = "navbar-toggle"></Navbar.Toggle>
            <Navbar.Collapse aria-controls = "navbar-toggle">
              <Nav>
                <Link className = "nav-link" to = "">Home</Link>
                <Link className = "nav-link" to = "/about">About</Link>
                <Link className = "nav-link" to = "/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </navbar>
        </Container>
      </Router>

    );
  }
}

export default App;
