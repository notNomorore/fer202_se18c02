import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function ValidatedFormEx6() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [nameError, setNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setNameError(name.length >= 3 ? "" : "Tên phải có ít nhất 3 ký tự.");
    setGenderError(gender ? "" : "Vui lòng chọn giới tính.");
    setCountryError(country ? "" : "Vui lòng chọn quốc gia.");
    setCheckboxError(isChecked ? "" : "Bạn phải đồng ý với điều khoản.");

    setIsFormValid(
      name.length >= 3 && gender && country && isChecked
    );
  }, [name, gender, country, isChecked]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <Form onSubmit={handleSubmit} style={{width:"20%", textAlign: "left", padding: 10}}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isInvalid={!!nameError}
        />
        <Form.Control.Feedback type="invalid">{nameError}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        <div>
          <Form.Check
            inline
            type="radio"
            label="Male"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            type="radio"
            label="Female"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            type="radio"
            label="Other"
            name="gender"
            value="other"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        {genderError && <div className="text-danger">{genderError}</div>}
      </Form.Group>
      <Form.Group controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control
          as="select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          isInvalid={!!countryError}
        >
          <option value="">-- Chọn quốc gia --</option>
          <option value="Vietnam">Vietnam</option>
          <option value="USA">USA</option>
          <option value="Japan">Japan</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">{countryError}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="terms">
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          isInvalid={!!checkboxError}
        />
        {checkboxError && <div className="text-danger">{checkboxError}</div>}
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isFormValid} className="mt-3">
        Submit
      </Button>
    </Form>
  );
}
