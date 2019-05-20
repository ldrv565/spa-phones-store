import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import './Article.scss';

import Content from '../../components/Content/Content';
import Title from '../../components/Title/Title';
import Meta from '../../components/Meta/Meta';
import Delimetr from '../../components/Delimetr/Delimetr';
import Image from '../../components/Image/Image';
import Count from '../../components/Count';
import Button from '../../components/Button';

const Article = ({
    match,
    fetching,
    phone,
    getPost,
    putCart,
    authorized,
    history
}) => {
    const { phoneId } = match.params;
    useEffect(() => {
        getPost(phoneId);
    }, []);

    const [value, setValue] = useState(1);

    const onClick = () => {
        if (authorized) {
            putCart(phoneId, value);
            history.push('/');
        } else {
            history.push('/login');
        }
    };

    return fetching || !phone.data ? (
        <div>Loading...</div>
    ) : (
        <Content>
            <article className="article">
                <section className="article__head">
                    <Title>{`${phone.data.vendor} ${phone.data.name}`}</Title>
                    <Meta name={`${phone.data.price} р.`} />
                    <Delimetr />
                </section>
                <section className="article__aside">
                    <Image
                        src={
                            phone.data.imgSrc ||
                            `/api/image/${phone.data.id_model}.jpg`
                        }
                    />
                </section>
                <table className="article__main">
                    <tbody>
                        {phone.details.map(detail => (
                            <tr key={detail.name}>
                                <td style={{ borderBottom: '1px dashed grey' }}>
                                    {`${detail.name}:`}
                                </td>
                                <td
                                    style={{
                                        textAlign: 'right',
                                        borderBottom: '1px dashed grey'
                                    }}
                                >
                                    {`${detail.value} ${detail.unit}`}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <section className="article__footer">
                    <Count value={value} setValue={setValue} />
                    <Button onClick={onClick}>add to cart</Button>
                </section>
            </article>
        </Content>
    );
};
export default withRouter(Article);
