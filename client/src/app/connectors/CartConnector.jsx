import {connect} from 'react-redux';

import Cart from '../pages/Cart/Cart';

import {getPosts} from '../actions';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        fetching: state.fetching,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: query => dispatch(getPosts(query)),
    };
}

const CartConnector = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);

export default CartConnector;
