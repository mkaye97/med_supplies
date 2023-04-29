import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
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
        <Grid item xs={12} sm={6} md={4} lg={3} key={_id}>
          <Card sx={{ width: '100%', height: '100%', marginBottom: '20px' }}>
            <Link to={`/products/${_id}`}>
              <CardMedia
                component="img"
                image={`/images/${image}`}
                alt={name}
                sx={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }}
              />
            </Link>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ height: '40px' }}
                noWrap
              >
                {name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ height: '40px' }}
              >
                <span>${price}</span>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ height: '20px' }}
              >
                <small>
                  {quantity} {pluralize('item', quantity)} in stock
                </small>
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={addToCart}
                sx={{ marginTop: '10px' }}
              >
                Add to cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      );
}

export default ProductItem;
