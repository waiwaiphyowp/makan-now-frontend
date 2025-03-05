import React, { useState, useEffect } from "react";
import "./MenuItem.css";

export default function MenuItem({ menuItem, addToCart, cart, handleAddQuantity, handleRemoveQuantity }) {
	// State to track if the menuItem is in the cart
	const [isItemInCart, setIsItemInCart] = useState(false);
	const [itemInCart, setItemInCart] = useState({});

	// useEffect to update the state when the cart changes
	useEffect(() => {
		// Ensure cart is always an array to avoid errors
		if (!cart || cart.length === 0) {
			setIsItemInCart(false); // Set to false if cart is empty or undefined
		} else {
			const itemInCart = cart.some((item) => item._id === menuItem._id);
			setIsItemInCart(itemInCart); // Update the state when cart changes

			const checkItem = cart.find((item) => item._id === menuItem._id);
			setItemInCart(checkItem);
		}
	}, [cart]);

	return (
		<div className="item-card">
			<div className="item-details">
				<p className="item-name">
					<strong>{menuItem.itemName}</strong>
				</p>
				<p className="item-description">{menuItem.description}</p>
				<p className="item-price">
					<strong>Base Price: $ {menuItem.price}</strong>
				</p>
				{isItemInCart ? (
					<div className="">
						<div className="quantity">
							<button type="button" onClick={() => handleRemoveQuantity(menuItem._id)}>
								-
							</button>
							<div>
								<span className="mx-3 font-bold">{itemInCart.quantity}</span>
							</div>

							<button type="button" onClick={() => handleAddQuantity(menuItem._id)}>
								+
							</button>
						</div>
					</div>
				) : (
					<button className="item-button" onClick={() => addToCart(menuItem)}>
						Add to Order
					</button>
				)}
			</div>
			<img className="item-img" src={menuItem.image} alt={menuItem.itemName} />
		</div>
	);
}
