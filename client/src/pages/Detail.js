import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    ADD_TO_CART,
    UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';
import './detail.css'

function Detail() {
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();

    const [currentProduct, setCurrentProduct] = useState({});

    const { loading, data } = useQuery(QUERY_PRODUCTS);

    const { products, cart } = state;

    useEffect(() => {
        // already in global store
        if (products.length) {
            setCurrentProduct(products.find((product) => product._id === id));
        }
        // retrieved from server
        else if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products,
            });

            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        }
        // get cache from idb
        else if (!loading) {
            idbPromise('products', 'get').then((indexedProducts) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: indexedProducts,
                });
            });
        }
    }, [products, data, loading, dispatch, id]);

    useEffect(() => {
        const updatedProduct = products.find((product) => product._id === id);
        if (updatedProduct) {
          setCurrentProduct(updatedProduct);
        }
      }, [cart, products, id]);
    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === id);
        if (itemInCart) {
          dispatch({
            type: UPDATE_CART_QUANTITY,
            _id: id,
            purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
          });
          idbPromise('cart', 'put', {
            ...itemInCart,
            purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
          });
        } else {
          dispatch({
            type: ADD_TO_CART,
            product: { ...currentProduct, purchaseQuantity: 1 },
          });
          idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
        }
        console.log('New quantity:', currentProduct.quantity - 1);
      
        // Decrement stock count
        setCurrentProduct({ ...currentProduct, quantity: currentProduct.quantity - 1 });
      };
      
      const removeFromCart = () => {
        dispatch({
          type: REMOVE_FROM_CART,
          _id: currentProduct._id,
        });
      
        idbPromise('cart', 'delete', { ...currentProduct });
      
        // Increment stock count
        setCurrentProduct({ ...currentProduct, quantity: currentProduct.quantity + 1 });
      };

    return (
        <>
            {currentProduct && cart ? (

                <div className="container">
                    <div className="p-4 p-md-5 mb-4 rounded text-bg-dark detail-bg-img" style={{ height: '20em' }}>
                        <div className="col-md-4 px-0">
                            <h1 className="display-4 fst-italic">Product Details</h1>
                            <p className="lead my-3"></p>

                        </div>
                    </div>
                    <Link to="/products" className="btn btn-primary back-to-products">← Back to Products</Link>
                
                    <div className="detail-content">
    <h2>{currentProduct.name}</h2>
    <p>{currentProduct.description}</p>
    <p>
  <strong>Price:</strong>${currentProduct.price}{' '}
</p>
<div className="button-container">
  <button
    className="btn btn-primary"
    onClick={addToCart}
    disabled={currentProduct.quantity === 0}
  >
    Add to Cart
  </button>
  <button
    className="btn btn-primary"
    disabled={!cart.find((p) => p._id === currentProduct._id)}
    onClick={removeFromCart}
  >
    Remove from Cart
  </button>
</div>
<p>
  <strong>Stock:</strong> {currentProduct.quantity}
</p>
    <img
        className="product-image"
        src={`/images/${currentProduct.image}`}
        alt={currentProduct.name}
    />
</div>
                </div>
            ) : null}
            {loading ? <img src={spinner} alt="loading" /> : null}
            <Cart />
        </>
    );
}

export default Detail;
