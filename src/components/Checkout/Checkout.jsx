import React from "react";
import { queueNumServices } from "../../services/queueServices"; 
import "./Checkout.css";

export default function Checkout() {

  const queueNum = queueNumServices();

  return (
		<div className="page-wrapper">
			<div>Checkout</div>
			<p>Order submitted </p>
			<p>Your Q no: {queueNum !== null ? queueNum : " "}</p>

			{/* Insert order summary */}
			<div>Order Summary</div>
		</div>
	);
}
