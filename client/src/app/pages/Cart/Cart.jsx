import React, { useEffect } from 'react';

import Content from './Content';

const Cart = ({ getCart, fetching, cart }) => {
    useEffect(() => {
        getCart();
    }, []);

    return fetching || cart.length === 0 ? (
        <div>Loading...</div>
    ) : (
        <Content cart={cart} />
    );
};
export default Cart;
