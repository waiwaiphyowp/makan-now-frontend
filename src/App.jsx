import { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import StoreOne from "./components/StallList/StoreOne/StoreOne";
import Checkout from "./components/Checkout/Checkout";
import { UserContext } from "../src/contexts/userContext";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import "../src/App.css";

const App = () => {
	const { isLoggedIn } = useContext(UserContext);
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
		<main>
			{isLoggedIn && <NavBar />}
			<Routes>
				{isLoggedIn ? (
					<>
						<Route path="/" element={<StoreOne addToCart={addToCart} />} />
						<Route path="/store-one" element={<StoreOne addToCart={addToCart} />} />
						<Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/signin" element={<Navigate to="/" />} />
						<Route path="/signup" element={<Navigate to="/" />} />
					</>
				) : (
					<>
						<Route path="/signin" element={isLoggedIn ? <Navigate to="/" /> : <SignIn />} />
						<Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <SignUp />} />
						<Route path="/" element={<SignIn />} />
					</>
				)}
				{/* Catch-all route to redirect to the home page */}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</main>
	);
};

export default App;
