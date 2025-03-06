import { Link } from "react-router-dom";
import "./Shop.css";


const Shops = () => {
	return (
		<div className="store-wrapper">

        <Link to="/storeone">Satay King Store</Link> 
        <Link to="" 
        style={{ backgroundColor: 'gray', pointerEvents: 'none' }}
      >Coming Soon... </Link>
      <Link to="" 
        style={{ backgroundColor: 'gray', pointerEvents: 'none' }}
      >Coming Soon...</Link>
      </div>	

	);
};

export default Shops;
