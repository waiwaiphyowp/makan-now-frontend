import { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import StoreOne from "./components/StallList/StoreOne/StoreOne";
import { UserContext } from "../src/contexts/userContext";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const { user } = useContext(UserContext);
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div>
      <NavBar />
      <h1>Makan Now</h1>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/store-one" element={<StoreOne addToCart={addToCart} />} /> {/* Ensure the route matches the navigate path */}
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </div>
  );
};

export default App;
