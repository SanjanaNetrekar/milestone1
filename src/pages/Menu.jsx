import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

// Sample menu data
const menuItems = [
  { id: 1, name: 'Gadbad Ice Cream', category: 'Ice Creams', price: 120, rating: 5, image: '/images/gadbad.jpeg', isPopular: true },
  { id: 2, name: 'Fruit Sundae', category: 'Ice Creams', price: 100, rating: 4, image: '/images/fruit.jpeg', isPopular: false },
  { id: 3, name: 'Brownie with Ice Cream', category: 'Desserts', price: 150, rating: 4.5, image: '/images/brownie.jpeg', isPopular: true },
  { id: 4, name: 'Cold Coffee', category: 'Beverages', price: 80, rating: 3.5, image: '/images/coldcoffee.jpeg', isPopular: false },
  { id: 5, name: 'Veg Sandwich', category: 'Snacks', price: 60, rating: 3.8, image: '/images/sandwich.jpeg', isPopular: false },
  { id: 6, name: 'Tiramisu', category: 'Desserts', price: 180, rating: 5, image: '/images/tiramisu.jpeg', isPopular: true },
];

const Menu = () => {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('');

  // Filter menu items based on category or popular/new
  const filteredItems = menuItems.filter(item => {
    if (filter === 'All') return true;
    if (filter === 'Popular') return item.isPopular;
    return item.category === filter;
  });

  // Sort based on price or rating
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sort === 'price') return a.price - b.price;
    if (sort === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <Container className="my-4">
      <h2 className="mb-4">Our Menu</h2>

      {/* Filters */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Select onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="Ice Creams">Ice Creams</option>
            <option value="Desserts">Desserts</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Popular">Popular Items</option>
          </Form.Select>
        </Col>

        <Col md={4}>
          <Form.Select onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort By</option>
            <option value="price">Price (Low to High)</option>
            <option value="rating">Rating (High to Low)</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Menu Grid */}
      <Row>
        {sortedItems.map((item) => (
          <Col key={item.id} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={item.image} height="220px" style={{ objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <strong>Category:</strong> {item.category} <br />
                  <strong>Price:</strong> ₹{item.price} <br />
                  <strong>Rating:</strong> ⭐ {item.rating}
                </Card.Text>
                <Button variant="success">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
