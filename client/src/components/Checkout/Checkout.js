import React, { useState } from 'react';
import Checkout from './Checkout';
import Card from './Card';

const Cart = ({ products }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <div className="products-container">
        {products.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {cartItems.length > 0 && <Checkout cartItems={cartItems} />}
    </div>
  );
};

export default Cart;
