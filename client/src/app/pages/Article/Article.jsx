import * as React from 'react';

import './Article.scss';

import Content from '../../components/Content/Content';
import Title from '../../components/Title/Title';
import Meta from '../../components/Meta/Meta';
import Text from '../../components/Text/Text';
import Delimetr from '../../components/Delimetr/Delimetr';
import LinkButton from '../../components/LinkButton/LinkButton';

class Article extends React.PureComponent {
    componentDidMount() {
        const {phoneId} = this.props.match.params;
        this.props.getPost(phoneId);
        console.log(this.props.phone);
    }

    render() {
        return (
            <Content>
                {!this.props.fetching
                    ? (
                        <article className="article">
                            <section className="article__head">
                                <Title>
                                    {this.props.phone.name}
                                </Title>
                                <Meta name={this.props.phone.name} />
                                <Delimetr />
                            </section>
                            <section>
                                <Text modifier="note">
                                    {this.props.phone.description.split(',').map(string => (
                                        <Text>
                                            {string}
                                        </Text>
                                    ))}
                                </Text>

                            </section>
                            <section className="article__footer">
                                <LinkButton link="/">купить</LinkButton>
                            </section>
                        </article>
                    )
                    : <div>Loading...</div>}
            </Content>
        );
    }
}

export default Article;
