import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { signIn } from "../../services/authServices";
import { UserContext } from "../../contexts/userContext";

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
		} catch (err) {
			setMessage(err.message);
		}
	};

	return (
		<div>
			<h2>Sign In</h2>

      <p>user: user1</p>
      <p>password: 123</p>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Username" name="username" value={username} onChange={handleChange} required />
				<input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} required />
				<button type="submit">Sign In</button>
			</form>
			<p>{message}</p>
			<p>
				Don't have an account? <a href="/signup">Sign Up</a>
			</p>
		</div>
	);
};

export default SignIn;