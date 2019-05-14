import { connect } from 'react-redux';

import { getPosts, getVendors } from '../actions';

import Articles from '../pages/Articles/Articles';

function mapStateToProps(state) {
    return {
        phones: state.phones.data,
        totalCount: state.phones.totalCount,
        vendors: state.vendors,
        fetching: state.fetching
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: (query, onSuccess) => dispatch(getPosts(query, onSuccess)),
        getVendors: () => dispatch(getVendors())
    };
}

const ArticlesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles);

export default ArticlesContainer;
