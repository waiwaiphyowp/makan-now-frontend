import { Link } from "react-router-dom";
import "./Shop.css";


const Shops = () => {
	return (
		<div className="store-wrapper">

        <Link to="/storeone">Satay King Store</Link> 
        <Link to="">Chicken Queen Store</Link>
      </div>	

	);
};

export default Shops;
