import React from 'react';

const Card = ({ product }) => {
    return (
        <div className="card-container">
        <div key={product.id} className = "product-card">
          <img className="image" src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button>Add to cart</button>
        </div>
        </div>
      );
}

export default Card;