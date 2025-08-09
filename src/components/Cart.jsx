import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p>Cart Total: {cart.length} items</p>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item} is in your cart.</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Cart;