import React from 'react';

const Card = ({ product }) => {
    return (
        <div className="card-container">
        <div key={product.id} className = "product-card">
            <div className="img-container">
          <img className="image" src={product.image} alt={product.name} />
            </div>
          <div className="card-name">{product.name}</div>
          <div className="card-description">{product.description}</div>
          <div className="card-price">Price: ${product.price}</div>
          <div className="btn-container">
          <button className="add-to-cart-btn">Add to cart</button>
          {product.isRentable && (
            <button className="rent-me-btn">Rent me</button>
          )}
          </div>
        </div>
        </div>
      );
}

export default Card;