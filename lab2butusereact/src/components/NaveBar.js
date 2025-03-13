import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function NaveBar() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home" style={{fontSize: '25px', fontWeight: 'bold'}}>Keyboard House</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">In-stock</Nav.Link>
            <NavDropdown title="Pre-ord" id="basic-nav-dropdown">
              <NavDropdown.Item href="ContentsPS2.js">Keyboards</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Keyboard's Kit
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Headphones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Others
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
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

export default NaveBar;