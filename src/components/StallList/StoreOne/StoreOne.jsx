import React, { useState, useEffect } from "react";
import { satayShop } from "../../../services/shopServices";

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
		<div>
			<h2>{shopName}</h2>
      <p>{address}</p>
			<h3>Menu:</h3>

			{menu.map((item) => (
				<div key={item._id}>
					<img src={item.image} alt={item.itemName} width={100} />
					<p>
						<strong>{item.itemName}</strong> - {item.price}
					</p>
					<p>{item.description}</p>
					<button onClick={() => addToCart(item)}>Add to Cart</button>
				</div>
			))}
		</div>
	);
};

export default StoreOne;
