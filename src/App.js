import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ContactForm from './components/ContactForm';
import './App.css'; 

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="app">
      <header>
      <h1 style={{ 
  fontFamily: "'Abril Fatface', cursive", 
  fontSize: '48px', 
  color: '#333' 
}}>
  Daily Grind
</h1>
        <p>Discover and buy the finest coffee</p>
      </header>

      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Checkout cartItems={cartItems} clearCart={clearCart} />
      <ContactForm />
    </div>
  );
}

export default App;
