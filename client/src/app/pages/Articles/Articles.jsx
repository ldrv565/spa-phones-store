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

        this.partLength = 10;
        this.loadMore = this.loadMore.bind(this);
    }

    componentWillMount() {
        this.props.getPosts(this.state.params);
        this.props.getVendors();
    }

    componentWillUpdate(_, { params }) {
        if (params.vendor !== this.state.params.vendor) {
            this.setState({ phones: [] });
            this.props.getPosts({ params });
            console.log(params);
        }
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
        return this.props.fetching ? (
            <div>Loading...</div>
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
                    pageStart={0}
                    loadMore={this.loadMore}
                    hasMore={
                        this.state.phones.length < this.props.phones.length
                    }
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
