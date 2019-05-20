import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Content from './Content';

const Cart = ({ getCart, fetching, cart, location }) => {
    let content = (cart.length && <Content cart={cart} />) || (
        <div>Загрузка...</div>
    );

    useEffect(() => {
        getCart();
        if (!fetching && cart.length === 0) {
            content = (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: location }
                    }}
                />
            );
        }
    }, []);

    return content;
};
export default Cart;
