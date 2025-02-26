import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router";

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
		<nav>
			{user ? (
				<ul>
					<li>Welcome, {user.username}</li>
					{/* The new link */}
					<li>
						<Link to="/" onClick={handleSignOut}>
							Sign Out
						</Link>
					</li>
				</ul>
			) : (
				<ul>
					{/* Another new link */}
					<li>
						<Link to="/">Home</Link>
					</li>

					<li>
						<Link to="/signup">Sign Up</Link>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default NavBar;
