import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

function AboutPage() {
  return (
    <div>
      <Navigation />
      <Header />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg p-4">
              <Card.Body>
                <Card.Title className="text-center text-primary fs-2">
                  About Us
                </Card.Title>
                <Card.Text className="text-muted fs-5">
                  Welcome to our website! We are dedicated to providing the best services and experiences to our users.
                </Card.Text>
                <Card.Text className="text-muted fs-5">
                  Our mission is to create high-quality products that meet your needs and expectations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default AboutPage;
