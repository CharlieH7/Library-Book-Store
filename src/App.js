import "./index.css";
import Nav from "./components/nav.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faShoppingCart,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Books from "./pages/books";
import { books } from "./data";
import Bookinfo from "./pages/bookinfo";
import Cart from "./pages/cart";
import React, { useEffect, useState } from "react";
library.add(
  faBars,
  faShoppingCart,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt,
  faArrowLeft
);

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}]);
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      if (item.id === book.id) {
        return {
          ...item, 
          quantity: +quantity,
        }
      }
      else {
        return item
      }
    }))
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity;
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])
   
  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<Bookinfo books={books} addToCart={addToCart} cart={cart}/>}
          />
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
