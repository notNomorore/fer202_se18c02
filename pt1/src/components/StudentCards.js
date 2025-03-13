import React from "react";
import { Card, Button } from "react-bootstrap";


const StudentCards = ({ student }) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-4">
      <Card.Img
        variant="top"
        src={student.avatar}
        alt={`${student.name}'s avatar`}
      />
      <Card.Body>
        <Card.Title>{student.id}</Card.Title>
        <Card.Text> {student.name}</Card.Text>
        <Button variant="outline-secondary" >Edit</Button>
      </Card.Body>
    </Card>
  );
};

export default StudentCards;
