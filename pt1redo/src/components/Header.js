import { Container, Nav, Row } from "react-bootstrap";
function Header () {
    return (
        <>
        <Container fluid>
            <Header>
                <Row>
                    <img src="https://i.pinimg.com/originals/29/09/6e/29096e075c97a9eb140eb1562a2fb815.png" alt="FPT University" width="150" />
                    <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="/home">Trang chủ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-1">Ngành học</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-2">Tuyển sinh</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-2">Sinh viên</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <input type="text" placeholder="Search" className="form-control w-25 d-inline-block ms-3" />
                </Row>
            </Header>
        </Container>   </>
    );
};
export default Header;