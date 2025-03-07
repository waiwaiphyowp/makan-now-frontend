import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { signIn } from "../../services/authServices";
import { UserContext } from "../../contexts/userContext";
import logo from "../../assets/photo/logo.png";

const SignIn = () => {
	const navigate = useNavigate();
	const { setUser } = useContext(UserContext);
	const [message, setMessage] = useState("");
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const { username, password } = formData;
	const handleChange = (evt) => {
		setMessage("");
		setFormData({ ...formData, [evt.target.name]: evt.target.value });
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			const signedInUser = await signIn(formData);
			setUser(signedInUser);
			navigate("/store-one"); // Navigate to shop page
		} catch (error) {
			setMessage(error.message);
		}
	};

	return (
		<div className="in-out-container">
			<img src={logo} alt="MakanNow Logo" className="mankan-logo" />
			<div style={{  margin: "30px auto"}}>
				<p style={{ color: "white", fontSize: "30px", fontWeight: "bold"}}>Skip the Q</p>
				<span style={{ color: "white" }}>with mobile Order.</span>
			</div>

			<p className="signIn-css">Sign In</p>

			{/* <div className="in-out-demo">
    <p><strong>User:</strong> user1</p>
    <p><strong>Password:</strong> 123</p>
  </div> */}

			<form className="in-out-form" onSubmit={handleSubmit}>
				<input type="text" className="in-out-input" placeholder="Username" name="username" value={username} onChange={handleChange} required />
				<input type="password" className="in-out-input" placeholder="Password" name="password" value={password} onChange={handleChange} required />
				<button type="submit" className="in-out-button">
					Sign In
				</button>
			</form>

			<p className="err-message">{message}</p>

			<p className="in-out-link">
				Don't have an account? <a href="/signup">Sign Up</a>
			</p>
		</div>
	);
};

export default SignIn;
