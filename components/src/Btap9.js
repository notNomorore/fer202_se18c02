import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./btap5/Header";
function Btap9  ()  {
  return (


    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <div style={{ backgroundColor: "#e67e22", padding: "20px 0", textAlign: "center" }}>
        <Container>
          <img
            src="https://th.bing.com/th/id/OIP.H7B2zQa6tyItU1JR6pPcngHaEE?rs=1&pid=ImgDetMain"
            alt="FPT University"
            style={{ width: "300px" }}
          />
        </Container>
        <div className="text-center">
          <Navbar bg="transparent" className="justify-content-center mt-2">
            <Nav>
              <Nav.Link href="#" style={{ color: "white"}}>Home</Nav.Link>
              <Nav.Link href="#" style={{ color: "white", marginLeft: "15px" }}>About</Nav.Link>
              <Nav.Link href="#" style={{ color: "white", marginLeft: "15px" }}>Contact</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </div>
      <div className="text-center mt-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h4 style={{ fontWeight: "bold" }}>About</h4>
        <p>This is the about section of the website.</p>
      </div>
      <div className="text-center mt-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h4 style={{ fontWeight: "bold" }}>Contact</h4>
        <p>For any inquiries, please contact us at <a href="mailto:example@example.com">example@example.com</a>.</p>
      </div>
      <div style={{ backgroundColor: "rgb(238, 199, 127)", padding: "10px 0", marginTop: "30px", textAlign: "center", color: "white" }}>
        <Container>
          © 2023 Website. All rights reserved.
        </Container>
      </div>
      <Header/>
    </div>

  );
};

export default Btap9;
