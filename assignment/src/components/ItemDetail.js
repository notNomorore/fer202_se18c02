import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Spinner, Alert, Button, Row, Col } from "react-bootstrap";

const KeyboardDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [keyboard, setKeyboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/Keyboards/${id}`) // Fetch dữ liệu từ JSON server
      .then((response) => {
        if (!response.ok) {
          throw new Error("Không tìm thấy bàn phím");
        }
        return response.json();
      })
      .then((data) => {
        setKeyboard(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!keyboard) return <Alert variant="warning">Bàn phím không tồn tại</Alert>;

  return (
    <Card className="m-3 p-3">
      <Row>
        <Col md={4} className="d-flex align-items-center justify-content-center">
          <Card.Img 
            variant="top" 
            src={keyboard.image} 
            alt={keyboard.name} 
            style={{ width: "100%", maxWidth: "250px", borderRadius: "10px" }}
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{keyboard.name}</Card.Title>
            <Card.Text>{keyboard.description}</Card.Text>
            <Card.Text><strong>Giá:</strong> {keyboard.price.toLocaleString()} VND</Card.Text>
            <Card.Text><strong>Trạng thái:</strong> {keyboard.status === "in-stock" ? "Còn hàng" : "Đặt trước"}</Card.Text>
            <Button variant="primary">Mua ngay</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default KeyboardDetail;