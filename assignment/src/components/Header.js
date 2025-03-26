import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='http://hoanghapc.vn/media/lib/22-04-2021/ban-phim-co-1.jpg'
            alt='First Banner'
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Luôn đặt uy tín lên hàng đầu</h3>
            <p>Mẫu mã đa dạng, chất lượng, giá tốt.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://powernow.com.vn/wp-content/uploads/2020/05/banner4-1.jpg'
            alt='Second Banner'
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Tích cực chăm sóc khách hàng</h3>
            <p>Đảm bảo khách hàng sẽ luôn có trải nghiệm tốt nhất.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://bizweb.dktcdn.net/100/466/510/themes/878280/assets/banner-collection.png?1716717807133'
            alt='Third Banner'
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Bảo hành, lắp đặt tận tay</h3>
            <p>Bao trọn chi phí lắp đặt, giao hàng cho khách.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}
export default Header;
