import React, { useState } from "react";
import "./OrderItem.css";

export default function OrderItem({ orderItem }) {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className="orderItem-card">
			<div className="orderItem-wrapper">
				<div className="orderItem-key-info">
					<p className="orderItem-queue">Q Number</p>
					<p className="orderItem-number">{orderItem.queueNumber}</p>
					<p className="orderItem-status">{orderItem.status}</p>
					<p className="orderItem-id">
						Order Ref No. <br />#{orderItem._id}
					</p>
				</div>

				<div className="accordion-item">
					<div className="accordion-title" onClick={() => setIsActive(!isActive)}>
						<div>View ordered summary</div>
						<div>{isActive ? "-" : "+"}</div>
					</div>
					{isActive && (
						<div className="accordion-content">
							<div className="orderItem-item-wrapper">
								{orderItem.orders.map((item, index) => (
									<div className="orderItem-item" key={index}>
										<p className="orderItem-item-name">{item.itemName}</p>
										<div className="orderItem-details">
											<p>QTY: {item.quantity}</p>
											<p>${(item.quantity * item.price).toFixed(2)}</p>
										</div>
									</div>
								))}
								<p className="orderItem-totalprice">Total: ${orderItem.totalPrice.toFixed(2)}</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
