import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import './index.css';

function ProductItem(item) {
    const [state, dispatch] = useStoreContext();

    const {
        image,
        name,
        _id,
        price,
        quantity
    } = item;

    const { cart } = state

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, purchaseQuantity: 1 }
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
    }

    return (

        <div className="card" key={_id} style={{ width: '260px', height: '400px', marginBottom: '20px' }}>
            <Link to={`/products/${_id}`}>
                <img className="card-img-top" src={`/images/${image}`} alt="Card image cap" style={{ width: '260px', height: '200px' }} />
            </Link>
            <div className="card-body">
                <h6 className="card-title">{name}</h6>
                <p className="card-text"> <span>${price}</span></p>
                <p className="card-text"><small class="text-muted">{quantity} {pluralize("item", quantity)} in stock</small></p>
                <button className="btn btn-primary" onClick={addToCart}>Add to cart</button>
            </div>
        </div>

    );
}

export default ProductItem;
