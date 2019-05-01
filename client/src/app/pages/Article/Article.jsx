import React, { useState, useEffect } from 'react';

import './Article.scss';

import Content from '../../components/Content/Content';
import Title from '../../components/Title/Title';
import Meta from '../../components/Meta/Meta';
import Delimetr from '../../components/Delimetr/Delimetr';
import LinkButton from '../../components/LinkButton/LinkButton';
import Image from '../../components/Image/Image';
import Count from '../../components/Count';

const Article = ({ match, getPost, fetching, phone }) => {
    const { phoneId } = match.params;
    useEffect(() => {
        getPost(phoneId);
    }, []);

    const [value, setValue] = useState(1);

    return fetching ? (
        <div>Loading...</div>
    ) : (
        <Content>
            <article className="article">
                <section className="article__head">
                    <Title>{phone.data.name}</Title>
                    <Meta name={phone.data.vendor} />
                    <Delimetr />
                </section>
                <section className="article__aside">
                    <Image
                        src={
                            phone.data.imgSrc ||
                            `/api/image/${phone.data.id_model}.jpg`
                        }
                        modifier="width"
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
                <Count value={value} setValue={setValue} />
                <section className="article__footer">
                    <LinkButton link="/">купить</LinkButton>
                </section>
            </article>
        </Content>
    );
};
export default Article;
