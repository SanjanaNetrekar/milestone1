// src/Cart.jsx
import React, { useContext } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="my-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Row>
            {cartItems.map((item) => (
              <Col md={12} key={item.id} className="mb-3">
                <Card>
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img src={item.image} alt={item.name} width="100" height="100" className="me-3" />
                      <div>
                        <h5>{item.name}</h5>
                        <p>₹{item.price} x {item.quantity}</p>
                      </div>
                    </div>
                    <div>
                      <Button variant="outline-secondary" onClick={() => updateQuantity(item.id, -1)}>-</Button>{' '}
                      <Button variant="outline-secondary" onClick={() => updateQuantity(item.id, 1)}>+</Button>{' '}
                      <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Card className="mt-4">
            <Card.Body>
              <h4>Total: ₹{total}</h4>
              <Button variant="success">Checkout</Button>
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
};

export default Cart;
