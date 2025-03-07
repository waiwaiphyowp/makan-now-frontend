import { Link } from "react-router-dom";
import ShopCard from "../ShopCard/ShopCard";
import "./Shop.css";
import SatayKing from "../../assets/photo/satay-king.jpg";
import ShopPlaceholder from "../../assets/photo/shop-placeholder.jpg";

const Shops = () => {
	return (
		<div className="store-wrapper">
			<ShopCard shopLink="/storeone" shopImage={SatayKing} shopName="Satay King Store" shopType="Local Cuisine" />
			<ShopCard shopLink="/" shopImage={ShopPlaceholder} shopName="Maxwell Chicken Rice" shopType="Coming Soon..." disabled />
			<ShopCard shopLink="/" shopImage={ShopPlaceholder} shopName="Nasi Lemak Ayam" shopType="Coming Soon..." disabled />
		</div>
	);
};

export default Shops;
