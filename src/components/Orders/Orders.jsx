import React, { useContext, useState, useEffect } from "react";
import { orderListServices } from "../../services/orderlistServices";
import { UserContext } from "../../contexts/userContext";
import OrderItem from "../OrderItem/OrderItem";
import "./Orders.css";

export default function Orders() {
	const { user } = useContext(UserContext);
	const [orderList, setOrderList] = useState([]);
	const userID = user._id;

	const fetchOrderList = async () => {
		try {
			const orderListData = await orderListServices(userID);
			setOrderList(orderListData);
			console.log(orderListData);
		} catch (error) {
			setError("Error fetching shop data");
			console.error("Error fetching shop data:", error);
		}
	};

	useEffect(() => {
		fetchOrderList();
	}, []);

	return (
		<div className="order-wrapper">
			{[...orderList].reverse().map((item) => (
				<OrderItem key={item._id} orderItem={item} />
			))}
		</div>
	);
}
