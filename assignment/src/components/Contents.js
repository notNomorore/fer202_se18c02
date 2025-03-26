import { useState, useEffect } from "react";
import { Button, Card, Nav, Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Contents() {
    const [keyboards, setKeyboards] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/Keyboards")
            .then(response => response.json())
            .then(data => {
                const inStockProducts = data.filter(item => item.status === "in-stock");
                setKeyboards(inStockProducts);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleViewDetails = (id) => {
        navigate(`/keyboard/${id}`);
    };

    const sortedAndFilteredKeyboards = () => {
        let filtered = keyboards.filter(keyboard =>
            keyboard.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (sortOption === "asc") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOption === "desc") {
            filtered.sort((a, b) => b.price - a.price);
        }

        return filtered;
    };

    return (
        <Container fluid style={{ maxWidth: "90%" }}>
            <h2 style={{ textAlign: "center", margin: "20px 0" }}>In-stock Products</h2>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Control
                        type="text"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Col>
                <Col md={6}>
                    <Form.Select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="">Sort by price</option>
                        <option value="asc">Low to high</option>
                        <option value="desc">High to low</option>
                    </Form.Select>
                </Col>
            </Row>

            <Row style={{ padding: "5px" }} className="d-flex align-items-stretch">
                {sortedAndFilteredKeyboards().map((keyboard) => (
                    <Col key={keyboard.id} md={3} className="mb-3">
                        <Card className="p-4 shadow-lg" style={{ maxWidth: "350px", margin: "auto", borderRadius: "7px" }}>
                            {/* ... (Card content remains the same) */}
                            <Card.Header>
                                <Nav variant="tabs" defaultActiveKey="#first">
                                    <Nav.Item>
                                        <Nav.Link href="#first">General Info</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Card.Img
                                    width="100%"
                                    height="260"
                                    variant="bottom"
                                    src={keyboard.image}
                                    alt={keyboard.name}
                                />
                                <Card.Body>
                                    <Card.Title>{keyboard.name}</Card.Title>
                                    <Card.Text>{keyboard.description}</Card.Text>
                                    <Card.Text><strong>Price:</strong> {keyboard.price.toLocaleString()} VND</Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Button variant="dark" onClick={() => handleViewDetails(keyboard.id)}>View details</Button>
                                    </div>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Contents;