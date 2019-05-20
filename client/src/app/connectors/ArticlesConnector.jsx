import { connect } from 'react-redux';

import { getPosts, getVendors, getLogged } from '../actions';

import { Articles } from '../pages';

function mapStateToProps(state) {
    return {
        phones: state.phones.data,
        totalCount: state.phones.totalCount,
        vendors: state.vendors,
        fetching: state.fetching,
        authorized: state.authorized
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: (query, onSuccess) => dispatch(getPosts(query, onSuccess)),
        getVendors: () => dispatch(getVendors()),
        getLogged: () => dispatch(getLogged())
    };
}

const ArticlesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles);

export default ArticlesContainer;
