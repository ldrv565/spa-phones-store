import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Content from '../../components/Content/Content';
import Card from '../../components/Card/Card';

class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            phones: []
        };

        this.partLength = 10;
        this.loadMore = this.loadMore.bind(this);
    }

    componentWillMount() {
        this.props.getPosts();
    }

    loadMore() {
        const currentCount = this.state.phones.length;
        this.setState(prevState => ({
            phones: [
                ...prevState.phones,
                ...this.props.phones.slice(
                    currentCount,
                    currentCount + this.partLength
                )
            ]
        }));
    }

    render() {
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadMore}
                hasMore={this.state.phones.length < this.props.phones.length}
                loader={<div key={0}>Loading...</div>}
            >
                <Content>
                    {this.state.phones.map(phone => (
                        <Card key={phone.id_model} phone={phone} />
                    ))}
                </Content>
            </InfiniteScroll>
        );
    }
}

export default Articles;
