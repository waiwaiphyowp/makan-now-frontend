import React from "react";
import { Link } from "react-router-dom";
import "./ShopCard.css";

export default function ShopCard({ shopImage, shopName, shopType, shopLink, disabled }) {
	return (
		<Link className="shop-card" to={shopLink} style={disabled && { backgroundColor: "#f2f2f2", color: "grey", pointerEvents: "none" }}>
			<img className="shop-img" src={shopImage} alt={shopName} />

			<div>
				<p className="shop-name">{shopName}</p>
				<p className="shop-type">{shopType}</p>
			</div>
		</Link>
	);
}
