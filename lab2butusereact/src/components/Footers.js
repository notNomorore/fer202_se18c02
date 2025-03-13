import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
function Footers () {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Container className="text-center my-5">
        <h3 className="fw-bold">Để lại thông tin nếu bạn cần tư vấn !</h3>
        <Form className="mt-4">
          <Row className="mb-3">
            <Col md={4}>
              <Form.Control type="text" placeholder="Họ tên *" />
            </Col>
            <Col md={4}>
              <Form.Control type="email" placeholder="Email *" />
            </Col>
            <Col md={4}>
              <Form.Select>
                <option>Chọn hình thức tư vấn</option>
                <option>Online</option>
                <option>Offline</option>
              </Form.Select>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Ghi chú (nếu có)" />
          </Form.Group>
          <Button variant="warning" className="px-4 py-2 fw-bold">Gửi thông tin</Button>
        </Form>
      </Container>
      <div style={{ backgroundColor: "#1d1d1d", color: "white", padding: "40px 0" }}>
        <Container>
          <Row>
            <Col md={4}>
              <h5 className="fw-bold">KẾT NỐI VỚI Keyboard House</h5>
              <p>TỔNG ĐÀI MIỄN PHÍ</p>
              <p>Tư vấn mua hàng: <strong>1800.6601</strong> (Nhánh 1)</p>
              <p>Góp ý, khiếu nại: <strong>1800.6616</strong> (8h - 22h)</p>
            </Col>

            <Col md={4}>
              <h5 className="fw-bold">VỀ CHÚNG TÔI</h5>
              <p><a href="#" className="text-white text-decoration-none">Giới thiệu về công ty</a></p>
              <p><a href="#" className="text-white text-decoration-none">Quy chế hoạt động</a></p>
              <p><a href="#" className="text-white text-decoration-none">Dự án Doanh nghiệp</a></p>
              <p><a href="#" className="text-white text-decoration-none">Tin tức khuyến mại</a></p>
              <p><a href="#" className="text-white text-decoration-none">Giới thiệu máy đổi trả</a></p>
            </Col>

            <Col md={4}>
              <h5 className="fw-bold">CHÍNH SÁCH</h5>
              <p><a href="#" className="text-white text-decoration-none">Chính sách bảo hành</a></p>
              <p><a href="#" className="text-white text-decoration-none">Chính sách đổi trả</a></p>
              <p><a href="#" className="text-white text-decoration-none">Chính sách bảo mật</a></p>
              <p><a href="#" className="text-white text-decoration-none">Chính sách trả góp</a></p>
              <p><a href="#" className="text-white text-decoration-none">Chính sách giao hàng & lắp đặt</a></p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <h5 className="fw-bold">HỖ TRỢ THANH TOÁN</h5>
              <Image src="https://static-00.iconduck.com/assets.00/visa-icon-2048x1286-fhy0jwfc.png" alt="Visa" width="50" className="mx-2"/>
              <Image src="https://logolook.net/wp-content/uploads/2021/07/Mastercard-Logo-1979-2048x1152.png" alt="MasterCard" width="50" className="mx-2"/>
              <Image src="https://www.russinvecchi.com.vn/wp-content/uploads/2020/09/931b119cf710fb54746d5be0e258ac89-logo-momo-1024x1024.png" alt="MoMo" width="50" className="mx-2"/>
              <Image src="https://agiletech.vn/wp-content/uploads/2019/06/agiletechvietnam-zalopay.png" alt="ZaloPay" width="50" className="mx-2" rounded/>
            </Col>  
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <p className="mb-0">© 2024 FPT University. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footers;
