import { useState } from "react";
import { Form, Button, Alert, Container, Card, InputGroup, Modal } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

const LoginForm = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false); // State cho modal thành công
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get("http://localhost:5000/UserAccounts");
            const users = response.data;

            const user = users.find(
                (u) => u.username === username && u.password === password
            );

            if (user) {
                if (user.status !== 'active') {
                    setError('Your account is inactive!');
                    return;
                }
                setShowSuccessModal(true); // Hiển thị modal thành công
            } else {
                setError('Invalid username or password!');
            }
        } catch (error) {
            console.error("", error);
            setError("Username and password are required.");
        }
    };

    const handleSuccessModalClose = (id) => {
        setShowSuccessModal(false);
        if (username === 'admin') {
            navigate('/item_management');
        } else {
           navigate(`/home/${id}`);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </InputGroup>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Login
                </Button>
                {error && <Alert variant="danger" style={{ marginTop: "10px" }}>{error}</Alert>}
            </Form>

            <Modal show={showSuccessModal} onHide={handleSuccessModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Successful!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Welcome, {username}!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSuccessModalClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default LoginForm;