import React from 'react';

const StoreOne = ({ addToCart }) => {
  const items = [
    { id: 1, name: 'Chicken Wings', price: '10 For $5' },
    { id: 2, name: 'Chicken Satay', price: '10 For $10' },
    { id: 3, name: 'Mutton Satay', price: '10 For $7' },
  ];

  return (
    <div>
      <h2>BBQ Store 1</h2>
      <h3>Menu:</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.price}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      {/* <h3>Cart:</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <button>Checkout</button> */}
    </div>
  );
};

export default StoreOne;
