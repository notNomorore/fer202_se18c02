import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const validatePassword = (password) => password.length >= 8;

export default function ValidatedForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (touchedEmail) {
      setEmailError(isEmail(email) ? "" : "Email không hợp lệ.");
    }
    if (touchedPassword) {
      setPasswordError(validatePassword(password) ? "" : "Mật khẩu phải có ít nhất 8 ký tự.");
    }
    setIsFormValid(isEmail(email) && validatePassword(password));
  }, [email, password, touchedEmail, touchedPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <Form onSubmit={handleSubmit} style={{textAlign:"left", width:"20%", padding: 10}}>
      <Form.Group controlId="email">
        <Form.Label style={{textAlign:"left"}}>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouchedEmail(true)}
          isInvalid={touchedEmail && !!emailError}
        />
        <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label style={{textAlign:"left"}}>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setTouchedPassword(true)}
          isInvalid={touchedPassword && !!passwordError}
        />
        <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isFormValid} className="mt-3">
        Submit
      </Button>
    </Form>
  );
}
