import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@material-ui/core';

// import './index.css';


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
        <Card key={_id} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardActionArea component={Link} to={`/products/${_id}`}>
            <CardMedia
              component="img"
              alt={name}
              height="200"
              image={`/images/${image}`}
              title={name}
            />
          </CardActionArea>
          <CardContent style={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h6" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <span>${price}</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <small>
                {quantity} {pluralize('item', quantity)} in stock
              </small>
            </Typography>
          </CardContent>
          <Button variant="contained" color="primary" onClick={addToCart} style={{ margin: '8px' }}>
            Add to cart
          </Button>
        </Card>
      );
    }

export default ProductItem;
