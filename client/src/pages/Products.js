import React, { useEffect, useState } from 'react';
import productData from '../data/productData.json';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(productData);
}, []);

const renderProductCard = (product) => (
  <div key={product.id} className = "product-card">
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <button>Add to cart</button>
  </div>
);

return (
  <div className="product-container">
    {products.map((product) => renderProductCard(product))}
  </div>
);
};

export default Products;