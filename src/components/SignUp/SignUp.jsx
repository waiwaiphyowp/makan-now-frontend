import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../services/authServices";
import { UserContext } from "../../contexts/userContext";
import logo from "../../assets/photo/logo.png";
import "./SignUp.css";

const SignUp = () => {
	const navigate = useNavigate();
	const { setUser } = useContext(UserContext);
	const [message, setMessage] = useState("");
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		passwordConf: "",
	});

	const { username, password, passwordConf } = formData;

	const handleChange = (evt) => {
		setMessage(""); // Clear message on input change
		setFormData({ ...formData, [evt.target.name]: evt.target.value });
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		// Validate the passwords before submission
		if (!formData.password || !formData.passwordConf) {
			setMessage("Input password");
			return;
		}

		if (formData.password !== formData.passwordConf) {
			setMessage("Password doesn't match");
			return;
		}

		try {
			const newUser = await signUp(formData);
			setUser(newUser); // user == {username, _id}
			navigate("/store-one"); // Navigate to shop page
			console.log(newUser);
		} catch (error) {
			setMessage(error.message);
		}
	};

	const isFormInvalid = () => {
		// Check if username, password, and password confirmation are all valid
		return !(username && password && passwordConf );
	};

	return (
		<div className="in-out-container">
			<img src={logo} alt="MakanNow Logo" className="mankan-logo" />
			<h2 style={{ color: "white" }}>Sign Up</h2>

			<form className="in-out-form" onSubmit={handleSubmit}>
				<input
					type="text"
					className="in-out-input"
					placeholder="Username"
					name="username"
					value={username}
					onChange={handleChange}
					required
				/>
				<input
					type="password"
					className="in-out-input"
					placeholder="Password"
					name="password"
					value={password}
					onChange={handleChange}
					required
				/>
				<input
					type="password"
					className="in-out-input"
					name="passwordConf"
					placeholder="Confirm Password"
					value={passwordConf}
					onChange={handleChange}
					required
				/>

				<div className="in-out-buttons">
					<button type="submit" className="signup-button" disabled={isFormInvalid()}>
						Sign Up
					</button>
					<button type="button" className="cancel-button" onClick={() => navigate("/")}>
						Cancel
					</button>
				</div>
			</form>

			<p className="in-out-message">{message}</p>
			<p className="in-out-link">
				Already have an account? <Link to="/signin">Sign In</Link>
			</p>
		</div>
	);
};

export default SignUp;
