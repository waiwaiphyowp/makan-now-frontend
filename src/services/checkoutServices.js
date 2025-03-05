import { useState, useEffect, useRef } from "react";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`;

const checkoutServices = async (userId, checkoutData) => {
	// const checkoutData = {
	// 	orders: { cart },
	// 	totalPrice: { totalPrice },
	// 	queueNumber: { queueNumber },
	// 	status: "Preparing",
	// };
	console.log(userId);

	try {
		const res = await fetch(`${BASE_URL}/${userId}/orders`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(checkoutData),
		});

		if (!res.ok) {
			throw new Error(`Error: ${res.statusText}`);
		}

		const data = await res.json();

		if (data.error) {
			throw new Error(data.error);
		}

		return data;
	} catch (error) {
		console.log("Error in satayShop function:", error);
		throw new Error(error);
	}
};

export { checkoutServices };
