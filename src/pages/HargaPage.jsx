import { Container, Row, Col, Button, Nav } from 'react-bootstrap';

import Tik1 from '../assets/1.jpg';
import Tik2 from '../assets/3.jpg';
import Tik3 from '../assets/5.jpg';
import ig1 from '../assets/2.jpg';
import ig2 from '../assets/4.jpg';
import ig3 from '../assets/6.jpg';
import byr from '../assets/bayar.png';

const HargaPage = () => {
  return (
    <div>
      <Container>
        <Row className='justify-content-md-center text-center'>
          <Col md={6} className='py-4'>
            <h1 className='text-center'>Daftar Harga</h1>
            <p className='text-center'>
              Pilih dan klik layanan yang ingin anda pesan
            </p>

            <img src={Tik1} className='img-fluid' alt='layanan-hitz' />
            <a
              href='https://api.whatsapp.com/send?phone=6288238334537&text=Hallo+kaka+saya+mau+beli+*Followers%2C+Likes+TikTok*+%2C+Apakah+Masih+PROMO%3F'
              className='btn btn-succes my-button mt-3'
              target='_blank'
            >
              Klik Disini Untuk Pesan
            </a>

            <img src={Tik2} className='img-fluid' alt='layanan-hitz' />
            <a
              href='https://api.whatsapp.com/send?phone=6288238334537&text=Hallo+kaka+saya+mau+beli+*Followers%2C+Likes+TikTok*+%2C+Apakah+Masih+PROMO%3F'
              className='btn btn-succes my-button mt-3'
              target='_blank'
            >
              Klik Disini Untuk Pesan
            </a>
            <img src={Tik3} className='img-fluid' alt='layanan-hitz' />
            <a
              href='https://api.whatsapp.com/send?phone=6288238334537&text=Hallo+kaka+saya+mau+beli+*Followers%2C+Likes+TikTok*+%2C+Apakah+Masih+PROMO%3F'
              className='btn btn-succes my-button mt-3'
              target='_blank'
            >
              Klik Disini Untuk Pesan
            </a>
          </Col>
        </Row>

        <Row className='justify-content-md-center text-center'>
          <Col md={6} className='py-4'>
            <div className='bg-dark'>hal</div>
            <h1 className='text-center my-3'>Layanan IG</h1>
            <p className='text-center'>
              Pilih dan klik layanan yang ingin anda pesan
            </p>

            <img src={ig1} className='img-fluid' alt='layanan-hitz' />
            <a
              href='https://api.whatsapp.com/send?phone=6288238334537&text=Hallo+kaka+saya+mau+beli+*Followers%2C+Likes+Instagram*+%2C+Apakah+Masih+PROMO%3F'
              className='btn btn-succes my-button mt-3'
              target='_blank'
            >
              Klik Disini Untuk Pesan
            </a>
            <img src={ig2} className='img-fluid' alt='layanan-hitz' />
            <a
              href='https://api.whatsapp.com/send?phone=6288238334537&text=Hallo+kaka+saya+mau+beli+*Followers%2C+Likes+Instagram*+%2C+Apakah+Masih+PROMO%3F'
              className='btn btn-succes my-button mt-3'
              target='_blank'
            >
              Klik Disini Untuk Pesan
            </a>
            <img src={ig3} className='img-fluid' alt='layanan-hitz' />
            <a
              href='https://api.whatsapp.com/send?phone=6288238334537&text=Hallo+kaka+saya+mau+beli+*Followers%2C+Likes+Instagram*+%2C+Apakah+Masih+PROMO%3F'
              className='btn btn-succes my-button mt-3'
              target='_blank'
            >
              Klik Disini Untuk Pesan
            </a>
          </Col>
        </Row>

        <Row className='justify-content-md-center text-center bg-dark text-white py-3'>
          <Col md={6}>Pembayaran Bisa Melalui</Col>
        </Row>
        <Row className='justify-content-md-center text-center mt-3'>
          <Col md={6}>
            <img src={byr} className='img-fluid' alt='layanan-hitz' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HargaPage;
