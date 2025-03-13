
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";
import React from "react";
import Header from "./components/Header";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentCard from "./components/StudentCard"; // Import StudentCard component

function App() {
  const userData = { name: "traltb@fe.edu.vn", age: 39 };
  const students = [
    { name: "traltb1@fe.edu.vn", age: 39, avatar: "public/images/stu1.png" },
    { name: "traltb2@fe.edu.vn", age: 40, avatar: "public/images/stu2.png" },
    { name: "traltb3@fe.edu.vn", age: 41, avatar: "public/images/stu3.png" },
  ];
  return (
    <>
    <Header/>
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {/*Duyệt qua mảng students và truyền từng đối tượng student vào Student Card*/}
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
