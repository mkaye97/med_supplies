import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import './order_history_banner.css';

import { Container, Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="p-4 p-md-5 mb-4 rounded text-bg-dark order-history-bg-img" style={{ height: '20em' }}>
        <div className="col-md-2 px-0">
          <h1 className="display-4 fst-italic">Order History</h1>
          <p className="lead my-3"></p>
        </div>
      </div>
      
      <Container>
        <Box my={4}>
          <Link to="/products">← Back to Products</Link>
        </Box>

        {user ? (
          <>
            <Typography variant="h4" gutterBottom>
              Order History for {user.firstName} {user.lastName}
            </Typography>
            {user.orders.map((order) => (
              <Box key={order._id} my={4}>
                <Typography variant="h6" gutterBottom>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </Typography>
                <Grid container spacing={4}>
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                      <Card>
                        <Link to={`/products/${_id}`}>
                          <CardMedia
                            component="img"
                            height="140"
                            image={`/images/${image}`}
                            alt={name}
                          />
                          <CardContent>
                            <Typography variant="h6" component="div">
                              {name}
                            </Typography>
                          </CardContent>
                        </Link>
                        <Box sx={{ p: 2 }}>
                          <Typography variant="subtitle1">${price}</Typography>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
          </>
        ) : null}
      </Container>
    </>
  );
}

export default OrderHistory;
