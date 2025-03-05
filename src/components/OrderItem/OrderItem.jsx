import React from "react";
import "./OrderItem.css";

export default function OrderItem({orderItem}) {
	return (
		<div className="item-card">
			<div>
				<p className="item-queue">
					<strong>Queue Number: {orderItem.queueNumber}</strong>
				</p>
				<p className="item-id">order id: {orderItem._id}</p>
				<p className="item-price">status: {orderItem.status}</p>
				<p className="item-price">$ {orderItem.totalPrice}</p>

                <a href="">view ordered items</a>
			</div>
		</div>
	);
}
