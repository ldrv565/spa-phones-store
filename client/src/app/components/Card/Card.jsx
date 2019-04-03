import * as React from 'react';

import Meta from '../Meta/Meta';
import Text from '../Text/Text';
import LinkButton from '../LinkButton/LinkButton';
import Delimetr from '../Delimetr/Delimetr';
import BackgroundImage from '../BackgroundImage/BackgroundImage';

import imgSrc from '../../../assets/img.jpg';

import './Card.scss';

const Card = props => (
    <article className="card">
        <section className="card__head">
            <section className="card__image">
                <BackgroundImage src={imgSrc} modifier="cover" />
            </section>
            <Meta name={props.phone.name} />
        </section>
        <Text>
            {props.phone.description}
        </Text>
        <section>
            <LinkButton link={`/phone/${props.phone.id_model}`} modifier="rounded">
                {'Countinue reading'}
            </LinkButton>
            <Delimetr />
        </section>
    </article>
);

export default Card;
