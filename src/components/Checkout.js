import React from 'react';

const Checkout = ({ cartItems, clearCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <p>Total: £{total.toFixed(2)}</p>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={() => console.log('Proceed to checkout')}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
