import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';


// Sample data (you can move to a separate file or use props later)
const popularDishes = [
  {
    title: "Gadbad Ice Cream",
    description: "A tall glass of colorful layered ice creams, jelly, fruits, and nuts.",
    image: "/images/banner1.jpeg"
  },
  {
    title: "Parfait Sundae",
    description: "Rich sundae with layers of ice cream, sauce, and cream.",
    image: "/images/parfait.jpeg"
  },
  {
    title: "Ideal Special",
    description: "Exclusive combo with exotic toppings and dry fruits.",
    image: "/images/tiramisu.jpeg"
  }
];

const testimonials = [
  {
    name: "Ananya S.",
    rating: 5,
    feedback: "Best ice cream I've ever had! Must try the Gadbad!"
  },
  {
    name: "Rahul M.",
    rating: 4,
    feedback: "Family favorite! Great place and friendly staff."
  }
];

const offers = [
  {
    title: "Happy Hours 🍦",
    details: "Get 20% off on all ice creams from 3 PM to 5 PM!",
  },
  {
    title: "Summer Special 🌞",
    details: "Buy 2, Get 1 Free on select sundaes!",
  }
];

const Home = () => {
  return (
    <div>

      {/* ===== Hero Banner ===== */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-home-slide-01.jpg" alt="Award-Winning Ice Creams" />
          <Carousel.Caption>
            <h3>Famous Gadbad Ice Cream</h3>
            <p>A delight from Mangalore loved across generations.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://rainbowgraph.in/uploads/project-banner/project-1645613004.jpg" alt="Ideal Café Specials" />
          <Carousel.Caption>
            <h3>Experience the Ideal Taste</h3>
            <p>Delicious. Creamy. Perfect.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://ginosgelato.com/images/banner1.jpg" alt="Award-Winning Ice Creams" />
          <Carousel.Caption>
            <h3>Famous Gadbad Ice Cream</h3>
            <p>A delight from Mangalore loved across generations.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://daijiworld.ap-south-1.linodeobjects.com/iWeb/daijiworld/images3/pic_030321_ideal18.jpg" alt="Ideal Café Specials" />
          <Carousel.Caption>
            <h3>Experience the Ideal Taste</h3>
            <p>Delicious. Creamy. Perfect.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="my-5">

        {/* ===== Popular Dishes ===== */}
        <h2 className="mb-4">Popular Dishes</h2>
        <Row>
          {popularDishes.map((dish, idx) => (
            <Col key={idx} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={dish.image} />
                <Card.Body>
                  <Card.Title>{dish.title}</Card.Title>
                  <Card.Text>{dish.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ===== Testimonials ===== */}
        <h2 className="my-5">Customer Testimonials</h2>
        <Row>
          {testimonials.map((review, idx) => (
            <Col key={idx} md={6} className="mb-4">
              <Card bg="light">
                <Card.Body>
                  <Card.Title>{review.name}</Card.Title>
                  <Card.Text>"{review.feedback}"</Card.Text>
                  <Card.Text>⭐ {review.rating} / 5</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ===== Offers ===== */}
        <h2 className="my-5">Exclusive Offers</h2>
        <Row>
          {offers.map((offer, idx) => (
            <Col key={idx} md={6} className="mb-3">
              <Card border="success">
                <Card.Body>
                  <Card.Title>{offer.title}</Card.Title>
                  <Card.Text>{offer.details}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
};

export default Home;
