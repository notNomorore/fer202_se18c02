import React from "react";
import { Card, Button } from "react-bootstrap";


const ItemCards = ({ item }) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-4">
      <Card.Img
        variant="top"
        src={item.avatar}
        alt={`${item.name}'s avatar`}
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text> {item.des} </Card.Text>
        <Button>Xem thêm</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCards;
