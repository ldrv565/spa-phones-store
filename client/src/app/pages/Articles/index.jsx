import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Content from '../../components/Content/Content';
import Card from '../../components/Card/Card';

import Filter from './Filter';

class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            phones: [],
            params: {},
            hasMoreItems: true,
            page: 0
        };

        this.partLength = 10;
        this.hasMoreItems = this.hasMoreItems.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentWillMount() {
        this.props.getVendors();
        this.props.getLogged();
    }

    loadMore() {
        this.setState({
            hasMoreItems: false
        });

        this.props.getPosts(
            {
                params: {
                    ...this.state.params,
                    offset: this.state.page * this.partLength,
                    count: this.partLength
                }
            },
            () =>
                this.setState(prevState => ({
                    phones: prevState.phones.concat(this.props.phones),
                    hasMoreItems: this.hasMoreItems(
                        prevState.phones.concat(this.props.phones)
                    )
                }))
        );

        this.setState(prevState => ({
            page: prevState.page + 1
        }));
    }

    hasMoreItems(phones) {
        return phones.length < this.props.totalCount;
    }

    render() {
        return (
            <>
                <Content>
                    <Filter title="Filter by vendor">
                        {this.props.vendors.concat('').map(vendor => (
                            <Filter.Item
                                key={vendor}
                                onClick={() => {
                                    this.setState({
                                        params: { vendor },
                                        phones: [],
                                        hasMoreItems: false
                                    });
                                    this.props.getPosts(
                                        { params: { vendor } },
                                        () => {
                                            this.setState({
                                                phones: this.props.phones,
                                                hasMoreItems: this.hasMoreItems(
                                                    []
                                                ),
                                                page: 1
                                            });
                                        }
                                    );
                                }}
                            >
                                {vendor || 'reset'}
                            </Filter.Item>
                        ))}
                    </Filter>
                </Content>

                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadMore}
                    hasMore={this.state.hasMoreItems}
                    loader={
                        <div className="loader" key={0}>
                            Loading ...
                        </div>
                    }
                >
                    <Content>
                        {this.state.phones.map(phone => (
                            <Card key={phone.id_model} phone={phone} />
                        ))}
                    </Content>
                </InfiniteScroll>
            </>
        );
    }
}

export default Articles;
