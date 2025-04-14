// src/Contact.jsx
import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row>
        <Col md={6}>
          <Card className="p-4">
            <h5>Get in Touch</h5>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" />
              </Form.Group>

              <Button variant="primary" type="submit">Send Message</Button>
            </Form>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-4">
            <h5>Our Location</h5>
            <p><strong>Ideal Café, Mangalore</strong></p>
            <p>Hampankatta, Mangalore, Karnataka - 575001</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 idealcafe@example.com</p>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9736161732994!2d74.83533097504963!3d12.866034617079073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a3ce376905d%3A0x62af08e2c1aa8d7f!2sIdeal%20Ice%20Cream%2C%20Mangalore!5e0!3m2!1sen!2sin!4v1682347593521!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
