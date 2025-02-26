import React from "react";

const Cart = ({ cart, removeFromCart }) => {
	return (
		<div>
			<h3>Cart:</h3>
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<>
					{cart.map((item, index) => (
						<div key={index}>
							<img src={item.image} alt={item.itemName} width={100}/>
							<p>
								<strong>{item.itemName}</strong> - {item.price}
							</p>
							{/* Remove button */}
							<button onClick={() => removeFromCart(index)}>Remove</button>
						</div>
					))}
				</>
			)}
			<button>Checkout</button>
		</div>
	);
};

export default Cart;
