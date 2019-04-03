import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Content from '../../components/Content/Content';
import Card from '../../components/Card/Card';

class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };

        this.partLength = 10;
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        const currentCount = this.state.posts.length;
        this.setState(prevState => ({
            posts: [
                ...prevState.posts,
                ...this.props.posts.slice(currentCount, currentCount + this.partLength),
            ],
        }));
    }

    render() {
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadMore}
                hasMore={this.state.posts.length < this.props.posts.length}
                loader={<div key={0}>Loading...</div>}
            >
                <Content>

                    {
                        this.state.posts.map(phone => (
                            <Card key={phone.id_model} phone={phone} />
                        ))
                    }
                </Content>
            </InfiniteScroll>
        );
    }
}

export default Articles;
