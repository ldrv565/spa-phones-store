import React, {useState} from 'react';

import Title from '../../components/Title/Title';
import Text from '../../components/Text/Text';
import Meta from '../../components/Meta/Meta';
import Delimetr from '../../components/Delimetr/Delimetr';
import Image from '../../components/Image/Image';
import Count from '../../components/Count';

const Item = ({phone}) => {
    const [value, setValue] = useState(1);

    return (
        <article className="article">
            <section className="article__head">
                <Delimetr />
            </section>
            <section className="article__aside">
                <Image
                    src={phone.imgSrc || `/api/image/${phone.id_model}.jpg`}
                />
            </section>
            <section className="article__main">
                <section className="article__head">
                    <Meta name={phone.vendor} />
                    <Title>{phone.name}</Title>
                    <Delimetr />
                    <Text>
                        {phone.description}
                    </Text>
                </section>
                <Count value={value} setValue={setValue} />
            </section>
        </article>
    );
};

export default Item;