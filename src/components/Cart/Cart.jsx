import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import CartItem from "../CartItem/CartItem";
import { UserContext } from "../../contexts/userContext";
import { queueNumServices } from "../../services/queueServices";
import { checkoutServices } from "../../services/checkoutServices";
import "./Cart.css";

const Cart = ({ cart, handleRemoveItem, handleAddQuantity, handleRemoveQuantity, totalPrice }) => {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const userID = user._id;
	console.log("test " + user._id);

	const [updatedCart, setUpdatedCart] = useState([]);

	const handleCheckout = async () => {
		try {
			// const queueNum = await queueNumServices();
			//console.log(queueNum);
			const checkoutData = {
				orders: updatedCart,
				totalPrice: totalPrice,
				queueNumber: 1,
				status: "Preparing",
			};
			console.log(checkoutData);
			const response = await checkoutServices(userID, checkoutData);

			console.log(response);
			navigate("/checkout");
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
			<h3>Cart:</h3>
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div className="menu-wrapper">
					{updatedCart.map((item, index) => (
						<CartItem
							key={item._id}
							cartItem={item}
							handleAddQuantity={handleAddQuantity}
							handleRemoveQuantity={handleRemoveQuantity}
							handleRemoveItem={handleRemoveItem}
						/>
					))}
				</div>
			)}

			<p>
				Total: <b>$ {totalPrice}</b>
			</p>
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
