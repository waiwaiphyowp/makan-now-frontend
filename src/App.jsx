import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import StoreOne from "./components/StallList/StoreOne/StoreOne";
import { UserContext } from "../src/contexts/userContext";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
	const { user } = useContext(UserContext);
	return (
		<div>
			<NavBar />
			<h1>Makan Now</h1>
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/store-one" element={<StoreOne />} /> {/* Ensure the route matches the navigate path */}
			</Routes>
		</div>
	);
};

export default App;
