import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { VscAccount } from 'react-icons/vsc';

function Navigation() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/UserAccounts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Không tìm thấy");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log("Error !")
      });
  }, [id]);

  return (
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
        </Navbar.Collapse><VscAccount style={{ marginRight: "4px", position: "relative", top: "-2px", maxWidth:"50%"}} />
        <h5>Hi, {user?.username}</h5>
      </Container>
    </Navbar>
  );
}

export default Navigation;


