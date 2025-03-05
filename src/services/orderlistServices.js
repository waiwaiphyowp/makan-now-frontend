

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`;

const orderListServices = async (userId) => {
	try {
		const res = await fetch(`${BASE_URL}/${userId}`, {
			method: "GET",
			headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },
		});

		if (!res.ok) {
			throw new Error(`Error: ${res.statusText}`);
		}

		const data = await res.json();
        console.log(data.user.ordersList)
        const orderList = data.user.ordersList

		if (data.error) {
			throw new Error(data.error);
		}

		return orderList;
	} catch (error) {
		console.log("Error in satayShop function:", error);
		throw new Error(error);
	}
};

export { orderListServices };
