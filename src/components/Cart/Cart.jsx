import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h3>Cart:</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - {item.price}
              {/* Remove button */}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
