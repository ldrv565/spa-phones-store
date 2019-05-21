import { connect } from 'react-redux';

import { Article } from '../pages';

import { getPost, putCart } from '../actions';

function mapStateToProps(state) {
    return {
        phone: state.phone,
        fetching: state.fetching,
        authorized: state.authorized
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPost: id => dispatch(getPost(id)),
        putCart: (id, count, onSuccess) =>
            dispatch(putCart(id, count, onSuccess))
    };
}

const ArticleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Article);

export default ArticleContainer;
