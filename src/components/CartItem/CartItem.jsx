import React, { useState, useEffect } from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CartItem({ cartItem, handleRemoveItem, handleAddQuantity, handleRemoveQuantity }) {
	return (
		<div className="item-card">
			<div className="item-details">
				<p className="item-name">
					<strong>{cartItem.itemName}</strong>
				</p>

				<p className="item-price">
					<strong>$ {cartItem.price * cartItem.quantity}</strong>
				</p>

				<div className="quantity">
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
						<button type="button" className="remove-button" onClick={() => handleRemoveItem(cartItem._id)}>
							<FontAwesomeIcon icon={faTrash} />
						</button>
					</div>
				</div>
			</div>
			<img className="item-img" src={cartItem.image} alt={cartItem.itemName} />
		</div>
	);
}
