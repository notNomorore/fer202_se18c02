import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginForm from './LoginForm'; // Import LoginForm
import 'bootstrap/dist/css/bootstrap.min.css';
function NavigationLog() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  return (
      <>
          <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
              <Container fluid>
                  <Navbar.Brand href="#" style={{ fontSize: '25px', fontWeight: 'bold' }}>Keyboard House</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                          <Nav.Link as={Link} to="#">Home</Nav.Link>
                          <Nav.Link as={Link} to="/instock">In-stock</Nav.Link>
                          <Nav.Link as={Link} to="/preord">Pre-ord</Nav.Link>
                          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                      </Nav>
                      <Button variant="dark" onClick={handleShowLoginModal}>Login</Button>
                  </Navbar.Collapse>
              </Container>
          </Navbar>

          <Modal show={showLoginModal} onHide={handleCloseLoginModal} >
              <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <LoginForm />
              </Modal.Body>
          </Modal>
      </>
  );
}

export default NavigationLog;