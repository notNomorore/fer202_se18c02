import React from "react";
import { Container, Row, Col} from "react-bootstrap";

function Footer() {
  return (
    <Footer style={{ backgroundColor: "#e2753f", padding: "20px 0", color: "black" }}>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Our Address</h5>
            <p>Khu đô thị FPT Đà Nẵng</p>
            <p>+84023111111</p>
            <p> +852 8765 4321</p>
            <p> <a href="mailto:fptudn@fpt.edu.vn" style={{ color: "black", textDecoration: "none" }}>fptudn@fpt.edu.vn</a></p>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};

export default Footer;