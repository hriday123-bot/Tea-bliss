import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-1 bg-dark text-white" style={{paddingTop:'5px',paddingBottom:'5px'}}>
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; {currentYear} Tea Bliss, All right reserved by Hriday
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
