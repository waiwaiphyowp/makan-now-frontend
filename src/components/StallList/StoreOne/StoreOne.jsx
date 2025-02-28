import React, { useState, useEffect } from "react";
import { satayShop } from "../../../services/shopServices";
import "./StoreOne.css";

const StoreOne = ({ addToCart }) => {
	const [shopData, setShopData] = useState({});
	const [error, setError] = useState(null);

	const fetchShopData = async () => {
		try {
			const satayShopData = await satayShop();
			setShopData(satayShopData);
		} catch (error) {
			setError("Error fetching shop data");
			console.error("Error fetching shop data:", error);
		}
	};

	useEffect(() => {
		fetchShopData();
	}, []);

	if (error) {
		return <div>{error}</div>;
	}

	if (!shopData || !shopData.menu) {
		return <div>Loading...</div>;
	}

	const { shopName, menu, address } = shopData;

	return (
		<div className="page-wrapper">
			<h2 className="store-title">{shopName}</h2>
			<p className="store-details">{address}</p>
			<h3>Menu:</h3>

			<div className="menu-wrapper">
				{menu.map((item) => (
					<div key={item._id} className="menu-card">
						<div>
							<p className="item-name">
								<strong>{item.itemName}</strong>
							</p>
							<p className="item-description">{item.description}</p>
							<p className="item-price">$ {item.price}</p>
							<button className="item-button" onClick={() => addToCart(item)}>
								Add to Cart
							</button>
						</div>
						<img className="item-img" src={item.image} alt={item.itemName} />
					</div>
				))}
			</div>
		</div>
	);
};

export default StoreOne;
