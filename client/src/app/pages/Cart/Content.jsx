import { reduce } from 'lodash';
import React, { useState } from 'react';

import Content from '../../components/Content/Content';
import LinkButton from '../../components/LinkButton/LinkButton';

import Item from './Item';

const CartContent = ({ cart }) => {
    const obj = {};
    cart.forEach(model => {
        obj[model.id_model] = model.count;
    });

    const prices = {};
    cart.forEach(model => {
        prices[model.id_model] = model.price;
    });

    const [counts, setCounts] = useState(obj);

    const setCount = idModel => count => {
        setCounts({ ...counts, [idModel]: count });
    };

    const totalCost = reduce(
        counts,
        (sum, value, key) => sum + value * prices[key],
        0
    );

    return (
        <Content>
            {cart.map(model => (
                <Item
                    key={model.id_model}
                    phone={model}
                    count={counts[model.id_model]}
                    setCount={setCount(model.id_model)}
                />
            ))}

            <section className="article__footer">
                <div>{`Общая сумма заказа: ${totalCost} р.`}</div>
                <LinkButton link="/">купить</LinkButton>
            </section>
        </Content>
    );
};
export default CartContent;
