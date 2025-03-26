import React, { useState, useEffect } from "react";
import { Table, Button, Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "http://localhost:5000/Keyboards";

const ItemManagement = () => {
    const [keyboards, setKeyboards] = useState([]);
    const [form, setForm] = useState({
        name: "",
        description: "",
        image: "",
        price: "",
        status: "",
    });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchKeyboards();
    }, []);

    const fetchKeyboards = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setKeyboards(data);
        } catch (error) {
            console.error("Error fetching keyboards:", error);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (editingId) {
            await fetch(`${API_URL}/${editingId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            setEditingId(null);
        } else {
            await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, id: Date.now() }),
            });
        }
        setForm({ name: "", description: "", image: "", price: "", status: "" });
        fetchKeyboards();
    };

    const handleEdit = (keyboard) => {
        setForm(keyboard);
        setEditingId(keyboard.id);
    };

    const handleDelete = async (id) => {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        fetchKeyboards();
    };

    return (
        <Container className="mt-4">
            <h2>Keyboard Management</h2>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" value={form.name} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description" value={form.description} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control name="image" value={form.image} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="price" value={form.price} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select" name="status" value={form.status} onChange={handleChange}>
                                <option value="">Select Status</option>
                                <option value="in-stock">In Stock</option>
                                <option value="pre-order">Pre-order</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" onClick={handleSubmit}>
                    {editingId ? "Update Keyboard" : "Add Keyboard"}
                </Button>
            </Form>

            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {keyboards.map((keyboard) => (
                        <tr key={keyboard.id}>
                            <td>{keyboard.id}</td>
                            <td>{keyboard.name}</td>
                            <td>{keyboard.description}</td>
                            <td>
                                <img src={keyboard.image} alt={keyboard.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                            </td>
                            <td>{keyboard.price}</td>
                            <td>{keyboard.status}</td>
                            <td>
                                <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(keyboard)}>
                                    Edit
                                </Button>
                                <Button variant="danger" size="sm" onClick={() => handleDelete(keyboard.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ItemManagement;