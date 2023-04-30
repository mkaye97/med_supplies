import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
    const [addOrder] = useMutation(ADD_ORDER);
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        async function saveOrder() {
            const cart = await idbPromise('cart', 'get');
            const products = cart.map((item) => item._id);

            if (products.length) {
                const { data } = await addOrder({ variables: { products } });
                const productData = data.addOrder.products;

                productData.forEach((item) => {
                    idbPromise('cart', 'delete', item);
                });
            }
        }

        saveOrder();
    }, [addOrder]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        setTimeout(() => {
            window.location.assign('/products');
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <Jumbotron>
                <h1>Success!</h1>
                <h2>Thank you for your purchase!</h2>
                <h2>
                    You will now be redirected to the Products page in {countdown}{' '}
                    seconds
                </h2>
            </Jumbotron>
        </div>
    );
}

export default Success;
