import {Container,Row,Col,Button,Nav} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Testi1 from '../assets/13.jpg'
import Testi2 from '../assets/14.jpg'
import Testi3 from '../assets/15.jpg'
import Testi4 from '../assets/16.jpg'
import Testi5 from '../assets/17.jpg'


const TestiPage = () => {
    let navigate = useNavigate();

  return (
    <div>

    <Container>
        <Row className='justify-content-md-center text-center'>
          <Col md={6} className='py-4'>
            <h1 className='text-center'>Testimoni</h1>
            <p className="text-center"></p>

          <img src={Testi1} className='img-fluid' alt="Testi" />          
          <img src={Testi2} className='img-fluid' alt="Testi" />       
          <img src={Testi3} className='img-fluid' alt="Testi" />
          <img src={Testi4} className='img-fluid' alt="Testi" />
          <img src={Testi5} className='img-fluid' alt="Testi" />
         
        <Button variant="success" onClick={() => navigate("/harga")} className='my-4'>
            Klik Disini Untuk Daftar Harga & Pemesanan
          </Button>
          </Col>
        </Row>

       

      </Container>

        
    </div>

  )
}

export default TestiPage