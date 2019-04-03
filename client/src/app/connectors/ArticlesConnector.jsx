import {connect} from 'react-redux';

import Articles from '../pages/Articles/Articles';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        fetching: state.fetching,
    };
}

const ArticlesContainer = connect(mapStateToProps)(Articles);

export default ArticlesContainer;
