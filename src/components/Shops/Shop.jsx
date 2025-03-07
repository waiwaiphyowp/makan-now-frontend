import { Link } from "react-router-dom";
import ShopCard from "../ShopCard/ShopCard";
import "./Shop.css";

const Shops = () => {
	return (
		<div className="store-wrapper">
			<ShopCard shopLink="/storeone" shopImage="src/assets/photo/satay-king.jpg" shopName="Satay King Store" shopType="Local Cuisine" />
			<ShopCard shopLink="/" shopImage="src/assets/photo/shop-placeholder.jpg" shopName="Maxwell Chicken Rice" shopType="Coming Soon..." disabled />
			<ShopCard shopLink="/" shopImage="src/assets/photo/shop-placeholder.jpg" shopName="Nasi Lemak Ayam" shopType="Coming Soon..." disabled />
		</div>
	);
};

export default Shops;
