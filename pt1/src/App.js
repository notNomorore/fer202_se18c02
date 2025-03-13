import logo from './logo.svg';
import './App.css';
import StudentCards from './components/StudentCards';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row } from 'react-bootstrap';
import Header from './components/Header';

function App() {
  const students = [
    { id: "DE160182", name: "Nguyễn Hữu Quốc Khánh", address: "DaNang", avatar: "/images/stu1.png" },
    { id: "DE160377", name: "Choy Vĩnh Thiện", address: "QuangNam", avatar: "/images/stu2.png" },
    { id: "DE160547", name: "Đỗ Nguyên Phúc", address: "QuangNam", avatar: "/images/stu3.png" },
    { id: "DE170049", name: "Lê Hoàng Minh", address: "DaNang", avatar: "/images/stu4.png" }
  ];
  return (
    <Container>
    <h1 className="my-4 text-center">Student information</h1>
    <Row>
      {students.map((student, index) => (
        <Col key={index} sm={12} md={4}>
          <StudentCards student={student} />
        </Col>
      ))}
    </Row>
  </Container>
  );
}

export default App;
