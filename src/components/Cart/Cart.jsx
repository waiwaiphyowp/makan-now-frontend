import React from "react";
import { useNavigate } from "react-router";
import "./Cart.css";

const Cart = ({ cart, removeFromCart }) => {
	const navigate = useNavigate();
	const handleCheckout = () => {
		navigate("/checkout");
	};

	return (
		<div className="page-wrapper">
			<h3>Cart:</h3>
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div className="menu-wrapper">
					{cart.map((item, index) => (
						<div key={item._id} className="menu-card">
							<div>
								<p className="item-name">
									<strong>{item.itemName}</strong>
								</p>
								<p className="item-description">{item.description}</p>
								<p className="item-price">$ {item.price}</p>

								<button className="item-button" onClick={() => removeFromCart(index)}>
									Remove
								</button>
							</div>
							<img className="item-img" src={item.image} alt={item.itemName} />
						</div>
					))}
				</div>
			)}
			<button className="checkout-button" onClick={handleCheckout}>
				Checkout
			</button>
		</div>
	);
};

export default Cart;
