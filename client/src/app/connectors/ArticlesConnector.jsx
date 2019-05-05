import { connect } from 'react-redux';

import { getPosts } from '../actions';

import Articles from '../pages/Articles/Articles';

function mapStateToProps(state) {
    return {
        phones: state.phones,
        fetching: state.fetching
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(getPosts())
    };
}

const ArticlesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles);

export default ArticlesContainer;
