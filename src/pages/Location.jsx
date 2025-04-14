// src/pages/Location.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Location = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4">📍 Our Location</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Ideal Café - Mangalore</Card.Title>
              <Card.Text>
                <strong>Address:</strong> 
                <br />Ideal Towers, Hampankatta, Mangalore - 575001
                <br /><strong>Phone:</strong> +91-824-1234567
                <br /><strong>Email:</strong> info@idealicecream.com
                <br /><strong>Timings:</strong> 10:00 AM – 10:00 PM
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <div style={{ width: "100%" }}>
            <iframe
              title="Ideal Café Map"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.976597135269!2d74.83840291462297!3d12.87029149091486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a444ff176d1%3A0xaef4b2d39150a6ce!2sIdeal%20Ice%20Cream!5e0!3m2!1sen!2sin!4v1649273090162!5m2!1sen!2sin"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Location;
