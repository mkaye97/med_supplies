import React, { useEffect, useState } from 'react';
import productData from '../data/productData.json';
import './Products.css';
import Card from '../components/Cards/Card';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(productData);
}, []);



return (
  <div className="product-container">
    {products.map((product) => <Card product = {product} />)}
  </div>
);
};

export default Products;
