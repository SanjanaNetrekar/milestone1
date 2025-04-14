import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '30px 0', marginTop: '50px' }}>
      <Container>
        <Row>
          {/* Left - Branding */}
          <Col md={4} className="mb-3">
            <h5>🍨 Ideal Café</h5>
            <p>Serving joy and scoops since 1975.</p>
          </Col>

          {/* Center - Quick Links */}
          <Col md={4} className="mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/location">Location</Link></li>
            </ul>
          </Col>

          {/* Right - Contact Info */}
          <Col md={4} className="mb-3">
            <h6>Contact Us</h6>
            <p>
              Ideal Towers, Hampankatta<br />
              Mangalore - 575001<br />
              📞 +91-824-1234567<br />
              📧 info@idealicecream.com
            </p>
          </Col>
        </Row>

        <hr />
        <p className="text-center mb-0">© {new Date().getFullYear()} Ideal Café. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
