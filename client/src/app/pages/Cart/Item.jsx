import React from 'react';

import Title from '../../components/Title/Title';
import Text from '../../components/Text/Text';
import Meta from '../../components/Meta/Meta';
import Delimetr from '../../components/Delimetr/Delimetr';
import Image from '../../components/Image/Image';
import Count from '../../components/Count';

const Item = ({ phone, count, setCount }) => {
    return (
        <>
            <article className="article">
                <section className="article__aside">
                    <Image
                        src={phone.imgSrc || `/api/image/${phone.id_model}.jpg`}
                    />
                </section>
                <section className="article__main">
                    <section className="article__head">
                        <Title>{`${phone.vendor} ${phone.name}`}</Title>
                        <Meta name={`${phone.price} р.`} />
                        <Delimetr />
                        <Text>{phone.description}</Text>
                    </section>
                    <Count value={count} setValue={setCount} />
                    <section className="article__footer">
                        <Text>{`Общая стоимость: ${count *
                            phone.price} р.`}</Text>
                    </section>
                </section>
            </article>
            <Delimetr />
        </>
    );
};

export default Item;
