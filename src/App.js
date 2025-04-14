// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Location from './pages/Location';
// import Home from './pages/Home';
// import Menu from './pages/Menu';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import Cart from './pages/Cart';
// import NavigationBar from './components/NavigationBar';
// import CartProvider from './pages/CartContext';
// import Contact from './pages/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <NavigationBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/location" element={<Location />} />
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;



// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages & Components
import Home from './pages/Home';
import Menu from './pages/Menu';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Location from './pages/Location'; // ✅ New Location Page

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer'; // ✅ New Footer
import CartProvider from './pages/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavigationBar />

        {/* All Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} /> {/* ✅ Added */}
        </Routes>

        <Footer /> {/* ✅ Placed at the bottom */}
      </Router>
    </CartProvider>
  );
}

export default App;
