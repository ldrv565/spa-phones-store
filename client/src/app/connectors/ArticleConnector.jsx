import { connect } from 'react-redux';

import Article from '../pages/Article/Article';

import { getPost } from '../actions';

function mapStateToProps(state) {
    return {
        phone: state.phone,
        fetching: state.fetching
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPost: id => dispatch(getPost(id))
    };
}

const ArticleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Article);

export default ArticleContainer;
