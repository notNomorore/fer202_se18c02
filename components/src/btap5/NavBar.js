import Nav from 'react-bootstrap/Nav';
function NavBar() {
    return (
        <div>
            <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
        </div>

    );
}
export default NavBar;