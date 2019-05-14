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
            params: {}
        };

        this.isFirstPage = true;
        this.partLength = 10;
        this.loadMore = this.loadMore.bind(this);
    }

    componentWillMount() {
        this.props.getPosts(null, this.setState({ phones: this.props.phones }));
        this.props.getVendors();
    }

    loadMore(page) {
        if (page !== 0) {
            this.isFirstPage = false;
            this.setState(prevState => ({
                phones: [...prevState.phones, ...this.props.phones]
            }));
        }

        this.props.getPosts(
            {
                params: {
                    ...this.state.params,
                    offset: (page + 1) * this.partLength,
                    count: this.partLength
                }
            },
            () =>
                this.setState(prevState => ({
                    phones: [...prevState.phones, ...this.props.phones]
                }))
        );
    }

    render() {
        return this.props.fetching && this.isFirstPage ? (
            <div>asdasdasd</div>
        ) : (
            <>
                <Content>
                    <Filter title="Filter by vendor">
                        {this.props.vendors.map(vendor => (
                            <Filter.Item
                                key={vendor}
                                onClick={() =>
                                    this.setState(prevState => ({
                                        params: { ...prevState.params, vendor }
                                    }))
                                }
                            >
                                {vendor}
                            </Filter.Item>
                        ))}

                        <Filter.Item
                            onClick={() =>
                                this.setState(prevState => ({
                                    params: { ...prevState.params, vendor: '' }
                                }))
                            }
                        >
                            reset
                        </Filter.Item>
                    </Filter>
                </Content>

                <InfiniteScroll
                    useWindow={false}
                    pageStart={0}
                    loadMore={this.loadMore}
                    hasMore={this.state.phones.length < this.props.totalCount}
                    loader={<div key={0}>Loading...</div>}
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
