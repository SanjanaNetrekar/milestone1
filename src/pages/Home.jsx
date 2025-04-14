// import React from 'react';
// import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';


// Sample data (you can move to a separate file or use props later)
// const popularDishes = [
//   {
//     title: "Gadbad Ice Cream",
//     description: "A tall glass of colorful layered ice creams, jelly, fruits, and nuts.",
//     image: "/images/banner1.jpeg"
//   },
//   {
//     title: "Parfait Sundae",
//     description: "Rich sundae with layers of ice cream, sauce, and cream.",
//     image: "/images/parfait.jpeg"
//   },
//   {
//     title: "Ideal Special",
//     description: "Exclusive combo with exotic toppings and dry fruits.",
//     image: "/images/tiramisu.jpeg"
//   }
// ];

// const testimonials = [
//   {
//     name: "Ananya S.",
//     rating: 5,
//     feedback: "Best ice cream I've ever had! Must try the Gadbad!"
//   },
//   {
//     name: "Rahul M.",
//     rating: 4,
//     feedback: "Family favorite! Great place and friendly staff."
//   }
// ];

// const offers = [
//   {
//     title: "Happy Hours 🍦",
//     details: "Get 20% off on all ice creams from 3 PM to 5 PM!",
//   },
//   {
//     title: "Summer Special 🌞",
//     details: "Buy 2, Get 1 Free on select sundaes!",
//   }
// ];

// const Home = () => {
//   return (
//     <div>

//       {/* ===== Hero Banner ===== */}
//       <Carousel>
//         <Carousel.Item>
//           <img className="d-block w-100" src="https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-home-slide-01.jpg" alt="Award-Winning Ice Creams" />
//           <Carousel.Caption>
//             <h3>Famous Gadbad Ice Cream</h3>
//             <p>A delight from Mangalore loved across generations.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100" src="https://rainbowgraph.in/uploads/project-banner/project-1645613004.jpg" alt="Ideal Café Specials" />
//           <Carousel.Caption>
//             <h3>Experience the Ideal Taste</h3>
//             <p>Delicious. Creamy. Perfect.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100" src="https://ginosgelato.com/images/banner1.jpg" alt="Award-Winning Ice Creams" />
//           <Carousel.Caption>
//             <h3>Famous Gadbad Ice Cream</h3>
//             <p>A delight from Mangalore loved across generations.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100" src="https://daijiworld.ap-south-1.linodeobjects.com/iWeb/daijiworld/images3/pic_030321_ideal18.jpg" alt="Ideal Café Specials" />
//           <Carousel.Caption>
//             <h3>Experience the Ideal Taste</h3>
//             <p>Delicious. Creamy. Perfect.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       <Container className="my-5">

//         {/* ===== Popular Dishes ===== */}
//         <h2 className="mb-4">Popular Dishes</h2>
//         <Row>
//           {popularDishes.map((dish, idx) => (
//             <Col key={idx} md={4} className="mb-4">
//               <Card>
//                 <Card.Img variant="top" src={dish.image} />
//                 <Card.Body>
//                   <Card.Title>{dish.title}</Card.Title>
//                   <Card.Text>{dish.description}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* ===== Testimonials ===== */}
//         <h2 className="my-5">Customer Testimonials</h2>
//         <Row>
//           {testimonials.map((review, idx) => (
//             <Col key={idx} md={6} className="mb-4">
//               <Card bg="light">
//                 <Card.Body>
//                   <Card.Title>{review.name}</Card.Title>
//                   <Card.Text>"{review.feedback}"</Card.Text>
//                   <Card.Text>⭐ {review.rating} / 5</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* ===== Offers ===== */}
//         <h2 className="my-5">Exclusive Offers</h2>
//         <Row>
//           {offers.map((offer, idx) => (
//             <Col key={idx} md={6} className="mb-3">
//               <Card border="success">
//                 <Card.Body>
//                   <Card.Title>{offer.title}</Card.Title>
//                   <Card.Text>{offer.details}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//       </Container>
//     </div>
//   );
// };

// export default Home;




// src/pages/HomeV2.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, Carousel, Badge } from 'react-bootstrap';

const featured = [
  {
    title: "Ice Cream of the Day 🍦",
    image: "https://s7d9.scene7.com/is/image/wkkellogg/recip_img-1110090_recip_img-1110090",
    description: "Parfait Sundae - Layers of ice cream, cream, syrup, and crunchy toppings.",
  },
  {
    title: "Choco-Berry Blend",
    image: "https://cdn.pixabay.com/photo/2016/09/01/14/20/tiramisu-1636223_640.jpg",
    description: "Rich chocolate meets berry coolness in this dessert delight.",
  },
  {
    title: "Classic Cold Coffee",
    image: "https://reciperahasya.com/wp-content/uploads/2024/09/Cold-Coffee-2048x1147.jpg",
    description: "The best summer companion – our signature chilled coffee shake.",
  },
];

const reviews = [
  { name: "Sneha K.", stars: 5, text: "This is my happy place! Every scoop is a surprise." },
  { name: "Nikhil D.", stars: 4, text: "Perfect chill-out spot with friends. Love the tiramisu!" },
];

const promotions = [
  {
    title: "Summer Sundae Sale ☀️",
    detail: "Buy 1 Get 1 Free on all sundaes between 4-6 PM!",
  },
  {
    title: "Loyalty Perks 🎁",
    detail: "Earn points with every scoop and redeem for free desserts!",
  }
];

const HomeV2 = () => {
  return (
    <div>
      {/* Carousel */}
      <Carousel>
        {featured.map((item, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100" src={item.image} alt={item.title} />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="my-5">
        {/* Highlights */}
        <h2 className="mb-4 text-center">🍧 Today's Highlights</h2>
        <Row>
          {featured.map((item, idx) => (
            <Col md={4} key={idx}>
              <Card className="mb-4 h-100 shadow">
                <Card.Img variant="top" src={item.image} style={{ height: '220px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button variant="outline-success">Order Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Testimonials */}
        <h2 className="mt-5 mb-4 text-center">❤️ What Our Customers Say</h2>
        <Row>
          {reviews.map((review, idx) => (
            <Col md={6} key={idx}>
              <Card bg="light" className="mb-3 shadow-sm">
                <Card.Body>
                  <Card.Title>{review.name}</Card.Title>
                  <Card.Text>"{review.text}"</Card.Text>
                  <Badge bg="warning" text="dark">⭐ {review.stars} / 5</Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Promotions */}
        <h2 className="mt-5 mb-4 text-center">🔥 Ongoing Offers</h2>
        <Row>
          {promotions.map((promo, idx) => (
            <Col md={6} key={idx}>
              <Card border="primary" className="mb-3">
                <Card.Body>
                  <Card.Title>{promo.title}</Card.Title>
                  <Card.Text>{promo.detail}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeV2;
