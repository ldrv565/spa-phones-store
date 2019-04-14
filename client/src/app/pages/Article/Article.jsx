import * as React from 'react';

import './Article.scss';

import Content from '../../components/Content/Content';
import Title from '../../components/Title/Title';
import Meta from '../../components/Meta/Meta';
import Text from '../../components/Text/Text';
import Delimetr from '../../components/Delimetr/Delimetr';
import LinkButton from '../../components/LinkButton/LinkButton';
import Image from '../../components/Image/Image';

class Article extends React.Component {
    constructor(props) {
        super(props);

        this.content = <div>Loading...</div>;
    }

    componentDidMount() {
        const {phoneId} = this.props.match.params;
        this.props.getPost(phoneId);
    }

    shouldComponentUpdate({fetching, phone}) {
        if (fetching) {
            return false;
        }
        this.content = (
            <article className="article">
                <section className="article__head">
                    <Title>
                        {phone.data.name}
                    </Title>
                    <Meta name={phone.data.vendor} />
                    <Delimetr />
                </section>
                <section className="article__aside">
                    <Image src={phone.data.imgSrc || `/api/image/${phone.data.id_model}.jpg`} modifier="width" />
                </section>
                <table className="article__main">
                    {phone.details.map((detail, index) => (
                        <tr key={index}>
                            <td style={{borderBottom: '1px dashed grey'}}>{`${detail.name}:`}</td>
                            <td style={{textAlign: 'right', borderBottom: '1px dashed grey'}}>{`${detail.value} ${detail.unit}`}</td>
                        </tr>
                    ))}
                </table>
                <section className="article__footer">
                    <LinkButton link="/">купить</LinkButton>
                </section>
            </article>
        );
        return true;
    }

    componentWillUnmount() {
        this.content = <div>Loading...</div>;
    }

    render() {
        return (
            <Content>
                {this.content}
            </Content>
        );
    }
}

export default Article;
