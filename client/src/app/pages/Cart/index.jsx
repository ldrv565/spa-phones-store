import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Content from './Content';

const Cart = ({ getCart, deleteCart, closeCart, fetching, cart, location }) => {
    useEffect(() => {
        getCart();
    }, []);

    if (fetching || !cart) {
        return <div>Lodaing...</div>;
    }

    if (cart && cart.length) {
        return (
            <Content
                cart={cart}
                closeCart={closeCart}
                deleteCart={id => deleteCart(id, getCart)}
            />
        );
    }

    return (
        <Redirect
            to={{
                pathname: '/',
                state: { from: location }
            }}
        />
    );
};
export default Cart;
