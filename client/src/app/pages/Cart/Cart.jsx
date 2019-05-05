import React, { useEffect } from 'react';

import Content from '../../components/Content/Content';
import LinkButton from '../../components/LinkButton/LinkButton';

import Item from './Item';

const Cart = ({ getCart, fetching, cart }) => {
    const [phone] = cart;
    useEffect(() => {
        getCart();
    }, []);

    return fetching || cart.length === 0 ? (
        <div>Loading...</div>
    ) : (
        <Content>
            <Item phone={phone} />
            <section className="article__footer">
                <LinkButton link="/">купить</LinkButton>
            </section>
        </Content>
    );
};
export default Cart;
