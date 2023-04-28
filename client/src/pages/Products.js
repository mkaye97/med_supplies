import React, { useEffect, useState } from 'react';
import productData from '../data/productData.json';
import './Products.css';
import Card from '../components/Cards/Card';
import Cart from '../components/Checkout/Checkout';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    setProducts(productData);
  }, []);
  
  const addToCartHandler = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          onAddToCart={addToCartHandler}
        />
      ))}
      <Cart items={cartItems} />
    </div>
  );
};

export default Products;
