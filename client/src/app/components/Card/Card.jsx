import * as React from 'react';

import Title from '../Title/Title';
import Meta from '../Meta/Meta';
import Text from '../Text/Text';
import LinkButton from '../LinkButton/LinkButton';
import Delimetr from '../Delimetr/Delimetr';
import Image from '../Image/Image';

import './Card.scss';

const Card = ({ phone }) => (
    <article className="card">
        <section className="card__head">
            <section className="card__image">
                <Image
                    src={phone.imgSrc || `/api/image/${phone.id_model}.jpg`}
                />
            </section>
            <Title modifier="subtitle" h={2}>
                {`${phone.vendor} ${phone.name}`}
            </Title>
            <Meta name={`${phone.price} р.`} />
        </section>
        <Text>{phone.description}</Text>
        <section>
            <LinkButton link={`/phone/${phone.id_model}`} modifier="rounded">
                {'buy'}
            </LinkButton>
            <Delimetr />
        </section>
    </article>
);

export default Card;
