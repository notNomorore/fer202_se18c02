import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/homee" style={{fontSize: '25px', fontWeight: 'bold'}}>Keyboard House</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/homee">Home</Nav.Link>
            <Nav.Link as={Link} to="/instock">In-stock</Nav.Link>
            <Nav.Link as={Link} to="/preord">Pre-ord</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto" style={{ padding: '0px' }}>
                <Button type="submit" style={{backgroundColor: 'black', borderColor: 'black'}}>Enter</Button>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navigation;


