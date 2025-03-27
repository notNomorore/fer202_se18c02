import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginForm from './LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './UserContext';
import { VscAccount } from "react-icons/vsc";

function NavigationLog() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const { user } = useContext(UserContext);

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
                        {user ? (
                            <span>Hi, {user.username}</span>
                        ) : (
                            <Button variant="dark" onClick={handleShowLoginModal}>
                                <VscAccount style={{ marginRight: "4px", position: "relative", top: "-2px" }} />
                                Login
                            </Button>

                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
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