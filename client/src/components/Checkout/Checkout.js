import React from 'react';

const Cart = ({ items }) => {
  return (
    <div className="cart">
      <div className="cart-header">
        <h3>Cart</h3>
        <span className="cart-count">{items.length}</span>
      </div>
      <ul className="cart-items">
        {items.map((item) => (
          <li key={item.id}>
            <div className="cart-item">
              <div className="cart-item-details">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
