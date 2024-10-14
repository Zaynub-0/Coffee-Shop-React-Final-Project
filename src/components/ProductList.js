import React from 'react';

const products = [
  { id: 1, name: 'Espresso', price: 3.99, image: 'https://rauwolf-coffee.at/media/image/7e/59/c6/perfekten-espresso-zubereiten.jpg', },
  { id: 2, name: 'Cappuccino', price: 4.49, image: 'https://lh3.googleusercontent.com/E5lJKAWWmnFzEJox55scgDigxoXE8BZJX_QxPnlS6WBKgdjjqxdJyk1zehjloN8tkxl9o6QPShulcWcQTRlVTDjACen8csBnNrU=w4858-h3644-c-rj-v1-e365', },
  { id: 3, name: 'Latte', price: 4.99, image: 'https://coffeebros.com/cdn/shop/articles/unnamed_be2775a1-186d-40c1-b094-488fa5fa4050.png?v=1675965693', },
  { id: 4, name: 'Matcha', price: 5.49, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ijLCwg405u_dvKyaK8XTXPIYidzglDB6xQ&s' , },
  { id: 5, name: 'Mocha', price: 5.99, image:'https://hoxtoncoffee.com/cdn/shop/articles/latte-art-on-mocha_1200x1200.jpg?v=1660069726', },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="products">
      <h2>Our Coffees</h2>
      {products.map((product) => (
        <div className="product" key={product.id}>
          <h3>{product.name}</h3>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '110px', height: '100px', marginBottom: '10px', borderRadius: '10px'}} 
          />
          <p>Price: £{product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
