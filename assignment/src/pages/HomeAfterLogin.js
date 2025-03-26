import Header from "../components/Header";
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentsLog from "../components/ContentsLog";
import Navigation from "../components/Navigation";

function HomeAfterLogin() {
  return (
    <div>
  <Navigation/>
        <Header/>
        <ContentsLog/>
    </div>
  );
}
export default HomeAfterLogin;    