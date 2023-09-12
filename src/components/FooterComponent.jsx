import { Container, Row, Col, Button } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <div>
      <Container fluid>
        <Row className='text-center py-4 bg-dark text-white mt-5'>
          <p>powered by mediahitz 2019</p>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
