// import React, { useContext } from 'react';
// import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../pages/CartContext';

// const NavigationBar = () => {
//   const { cartItems } = useContext(CartContext);

//   return (
//     <Navbar bg="light" expand="lg" sticky="top">
//       <Container>
//         <Navbar.Brand as={Link} to="/">Ideal Café</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="ms-auto d-flex align-items-center" style={{ gap: '20px' }}>
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
//             <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
//             <Nav.Link as={Link} to="/cart">
//               🛒 Cart{' '}
//               {cartItems.length > 0 && (
//                 <Badge bg="danger" pill>{cartItems.length}</Badge>
//               )}
//             </Nav.Link>
//             <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
//             <Nav.Link as={Link} to="/location">Location</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavigationBar;


// src/components/NavigationBar.jsx
import React, { useContext } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../pages/CartContext';

const NavigationBar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary fs-4">
          🍨 Ideal Café
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-4">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu" className="nav-link-custom">Menu</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
            <Nav.Link as={Link} to="/location" className="nav-link-custom">Location</Nav.Link>
            <Nav.Link as={Link} to="/signin" className="nav-link-custom">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="nav-link-custom">
              🛒 Cart{' '}
              {cartItems.length > 0 && (
                <Badge bg="danger" pill className="ms-1">{cartItems.length}</Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;


