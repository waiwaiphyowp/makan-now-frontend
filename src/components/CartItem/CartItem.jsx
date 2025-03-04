import React, { useState, useEffect } from "react";
import "./CartItem.css";

export default function CartItem({ cartItem, handleRemoveItem, handleAddQuantity, handleRemoveQuantity }) {
	return (
		<div className="item-card">
			<div>
				<p className="item-name">
					<strong>{cartItem.itemName}</strong>
				</p>
				<p className="item-description">{cartItem.description}</p>
				<p className="item-price">Quantity: {cartItem.quantity}</p>
				<p className="item-price">$ {cartItem.price * cartItem.quantity}</p>

				<div className="">
					<div className="">
						<button type="button" onClick={() => handleRemoveQuantity(cartItem._id)}>
							-
						</button>
						<div>
							<span className="mx-3 font-bold">{cartItem.quantity}</span>
						</div>

						<button type="button" onClick={() => handleAddQuantity(cartItem._id)}>
							+
						</button>
					</div>
				</div>

				<button type="button" className="item-button" onClick={() => handleRemoveItem(cartItem._id)}>
					Remove Item
				</button>
			</div>
			<img className="item-img" src={cartItem.image} alt={cartItem.itemName} />
		</div>
	);
}
