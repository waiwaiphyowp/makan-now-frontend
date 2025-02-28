import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faCartShopping, faUser, faShop } from '@fortawesome/free-solid-svg-icons';
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    // Clear the user state
    setUser(null);
    navigate("/");
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="top-nav">
        {user ? (
          <ul className="top-nav-list">
            <li className="top-nav-item">
              <FontAwesomeIcon icon={faUser} className="top-nav-icon" />
              <span>Welcome, {user.username}</span>
            </li>
            {/* The new link */}
            {/* sign out icon */}
            <li className="top-nav-sign-out">
              <Link to="/" onClick={handleSignOut} className="top-nav-link">
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="top-nav-sign-out-icon" />
              </Link>
            </li>
          </ul>
        ) : null }
      </nav>

      {/* NavBar show after log In */}
      {user && (
        <nav className="bottom-nav">
          <div className="bottom-nav-list">
            {/* Another new link */}
            {/* to the shop */}
            <div className="bottom-nav-item">
              <Link to="/store" className="bottom-nav-link">
                <FontAwesomeIcon icon={faShop} />
              </Link>
            </div>
            {/* add to cart */}
            <div className="bottom-nav-item">
              <Link to="/cart" className="bottom-nav-link">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
