import { useState, useEffect } from "react";
import { Button, Card, Nav, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

function PreOrderProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/Keyboards") // Đọc dữ liệu từ JSON server
            .then(response => response.json())
            .then(data => {
                // Lọc chỉ những sản phẩm có trạng thái "pre-order"
                const preOrderItems = data.filter(item => item.status === "pre-order");
                setProducts(preOrderItems);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <Navigation />
            <Header />
            <Container>
                <h2 style={{ textAlign: "center", margin: "20px 0" }}>Pre-Order Products</h2>
                <Row style={{ padding: "5px" }} className="d-flex align-items-stretch">
                    {products.map((product) => (
                        <Col key={product.id} md={4} className="mb-4">
                            <Card border="warning">
                                <Card.Header>
                                    <Nav variant="tabs" defaultActiveKey="#info">
                                        <Nav.Item>
                                            <Nav.Link href="#info">Info</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link href="#link">Link</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Img
                                        width="100%"
                                        height="180"
                                        variant="bottom"
                                        src={product.image}
                                        alt={product.name}
                                    />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        <Card.Text>
                                            <strong>Price:</strong> {product.price.toLocaleString()} VND
                                        </Card.Text>
                                        <Card.Text style={{ color: "orange", fontWeight: "bold" }}>
                                            🚀 Pre-order now!
                                        </Card.Text>
                                        <div className="d-flex justify-content-between">
                                            <Button variant="warning">Pre-order</Button>
                                            <Button variant="dark">View others</Button>
                                        </div>
                                    </Card.Body>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>

    );
}

export default PreOrderProducts;
