import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import HeroImg from '../assets/pricelist-socmed.png';
import Arrow from '../assets/arrow.gif';

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col md={6} className='text-center'>
          <img src={HeroImg} className='img-fluid' alt='hero-img' />
          <img src={Arrow} className='arrow' alt='arrow-img' />
          <Button
            variant='success'
            onClick={() => navigate('/harga')}
            className='my-1'
          >
            Klik Disini Untuk Daftar Harga & Pemesanan
          </Button>
          <Button
            variant='info'
            onClick={() => navigate('/testi')}
            className='my-1'
          >
            Klik Disini Untuk Testimoni
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
