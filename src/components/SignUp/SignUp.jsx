import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../services/authServices";
import { UserContext } from "../../contexts/userContext";

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
		setMessage("");
		setFormData({ ...formData, [evt.target.name]: evt.target.value });
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			const newUser = await signUp(formData);
			setUser(newUser); // user == {username, _id}
			navigate("/store-one"); // Navigate to shop page
			console.log(newUser);
		} catch (err) {
			setMessage(err.message);
		}
	};

	const isFormInvalid = () => {
		return !(username && password && password === passwordConf);
	};

	return (
		<div className="container">
			<h2 className="title">Sign Up</h2>

			<form className="container-form" onSubmit={handleSubmit}>
				<input
					type="text"
					className="input-form"
					placeholder="Username"
					name="username"
					value={username}
					onChange={handleChange}
					required
				/>
				<input
					type="password"
					className="input-form"
					placeholder="Password"
					name="password"
					value={password}
					onChange={handleChange}
					required
				/>
				<input
					type="password"
					className="input-form"
					name="passwordConf"
					placeholder="Confirm Password"
					value={passwordConf}
					onChange={handleChange}
					required
				/>

				<div className="buttons">
					<button
						type="submit"
						className="signUp-button"
						disabled={isFormInvalid()}
					>
						Sign Up
					</button>
					<button type="button" className="cancel-button" onClick={() => navigate("/")}>
						Cancel
					</button>
				</div>
			</form>

			<p className="message">{message}</p>
			<p className="link">
					Already have an account? <Link to="/signin">Sign In</Link>
				</p>
		</div>
	);
};

export default SignUp;
