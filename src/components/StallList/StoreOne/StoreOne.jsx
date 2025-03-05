import React, { useState, useEffect } from "react";
import { satayShop } from "../../../services/shopServices";
import MenuItem from "../../MenuItem/MenuItem";
import "./StoreOne.css";

const StoreOne = ({ addToCart, cart, handleAddQuantity, handleRemoveQuantity }) => {
	const [shopData, setShopData] = useState({});
	const [error, setError] = useState(null);

	console.log(cart)

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
					<MenuItem key={item._id} menuItem={item} cart={cart} addToCart={addToCart} handleAddQuantity={handleAddQuantity}  handleRemoveQuantity={handleRemoveQuantity}/>
				))}
			</div>
		</div>
	);
};

export default StoreOne;
