import { useState } from "react";
import { Form, Button, Alert, Container, Card, InputGroup } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
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
                alert(`Welcome, ${username}! Login Successful!`);
                if (user.account_type === 'admin') {
                    navigate('/item_management');
                  } else {
                    navigate('/homee');
                  }
                } else {
                  setError('Invalid username or password!');
                }
        } catch (error) {
            console.error("", error);
            setError("Username and password are required.");
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
            </Container>
    );
};

export default LoginForm;