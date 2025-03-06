import { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import StoreOne from "./components/StallList/StoreOne/StoreOne";
import Orders from "./components/Orders/Orders";
import { UserContext } from "../src/contexts/userContext";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import Shops from "./components/Shops/Shop"; // Import Shops component
import "../src/App.css";

const App = () => {
	const { isLoggedIn } = useContext(UserContext);

	const [cart, setCart] = useState([]);

	// Add item to cart
	const handleAddToCart = (orderItem) => {
		const checkItem = cart.find((item) => item._id === orderItem._id);

		if (!checkItem) {
			const newItem = { ...orderItem, quantity: 1 }; // use orderItem here
			setCart([...cart, newItem]);
		} else {
			const updatedCartItems = cart.map((item) => {
				if (item._id === orderItem._id) {
					// Use _id to match
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});
			setCart(updatedCartItems);
		}
	};

	const handleAddQuantity = (orderItemId) => {
		const itemIndex = cart.findIndex((item) => item._id === orderItemId);
		const updatedCartItems = [...cart];
		const currentQty = updatedCartItems[itemIndex]?.quantity || 0;
		updatedCartItems[itemIndex].quantity = currentQty + 1;
		setCart(updatedCartItems);
	};

	const handleRemoveQuantity = (orderItemId) => {
		const itemIndex = cart.findIndex((item) => item._id === orderItemId);
		const newCartArray = [...cart];
		const currentQty = newCartArray[itemIndex]?.quantity || 0;
		const newQty = currentQty - 1;

		if (currentQty > 0) {
			if (newQty > 0) {
				newCartArray[itemIndex].quantity = newQty;
				setCart([...newCartArray]);
			} else {
				const updatedCart = newCartArray.filter((item) => item !== cart[itemIndex]);
				setCart(updatedCart);
			}
		}
	};

	// Remove item from cart

	const handleRemoveItem = (orderItemId) => {
		const itemIndex = cart.findIndex((item) => item._id === orderItemId);
		const updatedCart = cart.filter((item) => item !== cart[itemIndex]);
		setCart(updatedCart);
	};

	const totalPrice = cart.reduce((acc, obj) => acc + obj.price * obj.quantity, 0);

	return (
		<main>
			{isLoggedIn && <NavBar />}
			<Routes>
				<Route
					path="/"
					element={
						isLoggedIn ? (
              <Navigate to="/shops" />
            ) : (
							<SignIn />
						)
					}
				/>
        <Route
          path="/shops"
          element={isLoggedIn ? <Shops /> : <Navigate to="/" />}
        />
        <Route
          path="/storeone"
          element={
            isLoggedIn ? (
              <StoreOne
                cart={cart}
                addToCart={handleAddToCart}
                handleAddQuantity={handleAddQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
              />
            ) : (
              <Navigate to="/" />
            )
					}
				/>
				<Route
					path="/cart"
					element={
						isLoggedIn ? (
							<Cart
								cart={cart}
								setCart={setCart}
								handleRemoveItem={handleRemoveItem}
								handleAddQuantity={handleAddQuantity}
								handleRemoveQuantity={handleRemoveQuantity}
								totalPrice={totalPrice}
							/>
						) : (
							<Navigate to="/" />
						)
					}
				/>

				<Route path="/orders" element={isLoggedIn ? <Orders /> : <Navigate to="/" />} />
				<Route path="/signin" element={!isLoggedIn ? <SignIn /> : <Navigate to="/" />} />
				<Route path="/signup" element={!isLoggedIn ? <SignUp /> : <Navigate to="/" />} />

				{/* Catch-all route to redirect to the home page */}
				<Route path="*" element={!isLoggedIn ? <SignIn /> : <Navigate to="/" />} />
			</Routes>
		</main>
	);
};

export default App;
