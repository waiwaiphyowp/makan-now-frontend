import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import CartItem from "../CartItem/CartItem";
import { UserContext } from "../../contexts/userContext";
import { queueNumServices } from "../../services/queueServices";
import { checkoutServices } from "../../services/checkoutServices";
import "./Cart.css";

const Cart = ({ cart, setCart, handleRemoveItem, handleAddQuantity, handleRemoveQuantity, totalPrice }) => {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const userID = user._id;

	const [updatedCart, setUpdatedCart] = useState([]);

	const handleCheckout = async () => {
		try {
			const checkoutData = {
				orders: updatedCart,
				totalPrice: totalPrice,
				status: "Preparing",
			};
			console.log(checkoutData);
			const response = await checkoutServices(userID, checkoutData);

			console.log(response);
			setCart([]);
			navigate("/orders");
		} catch (err) {
			// Handle errors (e.g., display message to the user)
			console.error("Checkout error:", err.message);
		}
	};

	useEffect(() => {
		setUpdatedCart([...cart]);
		console.log(updatedCart);
	}, [cart]);

	return (
		<div className="page-wrapper">
		
			{cart.length === 0 ? (
				<h3>Your cart is empty.</h3>
			) : (
				
				<div className="menu-wrapper">
					<h3>Cart:</h3>
					{updatedCart.map((item, index) => (
						<CartItem
							key={item._id}
							cartItem={item}
							handleAddQuantity={handleAddQuantity}
							handleRemoveQuantity={handleRemoveQuantity}
							handleRemoveItem={handleRemoveItem}
						/>
					))}
					<p>
						Total: <b>$ {totalPrice}</b>
					</p>
				</div>
			)}

			{cart.length > 0 ? (
				<button className="checkout-button" onClick={handleCheckout}>
					Checkout
				</button>
			) : (
				<a href="/">
					<button className="checkout-button">Order Food</button>
				</a>
			)}
		</div>
	);
};

export default Cart;
