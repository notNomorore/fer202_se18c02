import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
function ContentsP2() {
    return (
        <Container >
            <Carousel>
                <Carousel.Item>
                    <Card className="bg-dark text-black">
                        <Card.Img width="269" height ="200" src="https://minhancomputercdn.com/media/product/9502_akko_5108s_black_pink_b_5.jpg" alt="Card image" className='d-250 w-180' />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-black">
                        <Card.Img src="https://minhancomputercdn.com/media/product/9502_akko_5108s_black_pink_b_5.jpg" alt="Card image" className='d-250 w-180' />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
            </Carousel>


        </Container>

    );
}

export default ContentsP2;;