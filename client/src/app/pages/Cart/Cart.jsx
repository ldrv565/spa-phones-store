import React, { useEffect } from 'react';

import Content from '../../components/Content/Content';
import LinkButton from '../../components/LinkButton/LinkButton';

import Item from './Item';

const Cart = ({ getCart, fetching, cart }) => {
    useEffect(() => {
        getCart();
    }, []);

    return fetching || cart.length === 0 ? (
        <div>Loading...</div>
    ) : (
        <Content>
            {cart.map(model => (
                <Item phone={model} key={model.id_model} />
            ))}

            <section className="article__footer">
                <LinkButton link="/">купить</LinkButton>
            </section>
        </Content>
    );
};
export default Cart;
