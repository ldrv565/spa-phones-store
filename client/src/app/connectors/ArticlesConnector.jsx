import { connect } from 'react-redux';

import { getPosts, getVendors } from '../actions';

import Articles from '../pages/Articles/Articles';

function mapStateToProps(state) {
    return {
        phones: state.phones,
        vendors: state.vendors,
        fetching: state.fetching
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: query => dispatch(getPosts(query)),
        getVendors: () => dispatch(getVendors())
    };
}

const ArticlesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles);

export default ArticlesContainer;
