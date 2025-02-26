const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/shops`;
const satayShopID = "67bea84407155c3b9fd3c65b";

const satayShop = async () => {
	try {
		const res = await fetch(`${BASE_URL}/${satayShopID}`, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
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

export { satayShop };
