import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Navbars, Row } from 'react-bootstrap';
function Contents() {
    return (
        <Container>
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>In-stock Products</h2>
            <Row style={{ padding: '5px' }} className="d-flex align-items-stretch">
                <Col>
                    <Card border='dark' >
                        <Card.Header>
                            <Nav variant="tabs" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link href="#first">Info</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Img width={'269'} height={'180'} variant="bottom" src="https://images.mmorpg.com/images/contentImages/102022/Nuphy_Air75_Top_Down_2.jpg" alt='Nuphy Air75' />
                            <Card.Body>
                                <Card.Title>Nuphy Air75</Card.Title>
                                <Card.Text>
                                An ultra-thin mechanical keyboard with Gateron G Pro switches, wireless connectivity, and vibrant RGB lighting. Perfect for programmers and gamers!
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="dark">Buy</Button>
                                    <Button variant="dark">View others</Button>
                                </div>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border='dark'>
                        <Card.Header>
                            <Nav variant="tabs" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link href="#first">Info</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Img width={'269'} height={'180'} variant="bottom" src="https://file.hstatic.net/1000026716/file/ban-phim-co-gaming-dareu-ek87-black-multi-led-4_b4bdc917fa64425c82b21750bcb0f563.jpg" alt='Dareu ek87' />
                            <Card.Body>
                                <Card.Title>Dareu EK87</Card.Title>
                                <Card.Text>
                                A TKL keyboard featuring durable mechanical switches, high-quality PBT keycaps, and customizable RGB lighting. Ideal for both office work and gaming !</Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="dark">Buy</Button>
                                    <Button variant="dark">View others</Button>
                                </div>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border='dark'>
                        <Card.Header>
                            <Nav variant="tabs" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link href="#first">Info</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Img width={'269'} height={'180'} variant="bottom" src="https://akkogear.com.vn/wp-content/uploads/2023/01/kit-ban-phim-co-monsgeek-mg75-white-06-1536x1536.jpg" alt='Kit Monsgeek MG75' />
                            <Card.Body>
                                <Card.Title>Kit Monsgeek MG75</Card.Title>
                                <Card.Text>
                                A 75% custom keyboard kit with a premium aluminum build and support for various switches. A great choice for enthusiasts who love building their own keyboard !</Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="dark">Buy</Button>
                                    <Button variant="dark">View others</Button>
                                </div>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border='dark'>
                        <Card.Header>
                            <Nav variant="tabs" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link href="#first">Info</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Img width={'269'} height={'180'} variant="bottom" src="https://i.redd.it/y9v4hz00dp971.jpg" alt='Duck Viper V3' />
                            <Card.Body>
                                <Card.Title>Duck Viper V3</Card.Title>
                                <Card.Text>
                                A unique design with striking red and white keycaps. Equipped with Silent Red switches for a smooth typing experience, perfect for both gaming and work.
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="dark">Buy</Button>
                                    <Button variant="dark">View others</Button>
                                </div>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default Contents;