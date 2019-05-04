import React, {useEffect} from 'react';

import './Cart.scss';

import Content from '../../components/Content/Content';
import LinkButton from '../../components/LinkButton/LinkButton';

import Item from './Item';

const Cart = ({getPosts, fetching, posts}) => {
    const [phone] = posts;
    useEffect(() => {
        getPosts();
    }, []);


    return !fetching && (
        <Content>
            <Item phone={phone} />
            <Item phone={phone} />
            <Item phone={phone} />
            <Item phone={phone} />
            <Item phone={phone} />
            <section className="article__footer">
                <LinkButton link="/">купить</LinkButton>
            </section>
        </Content>
    );
};
export default Cart;
