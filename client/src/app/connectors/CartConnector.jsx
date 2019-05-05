import { connect } from 'react-redux';

import Cart from '../pages/Cart/Cart';

import { getCart } from '../actions';

function mapStateToProps(state) {
    return {
        cart: state.cart,
        fetching: state.fetching
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCart: () => dispatch(getCart())
    };
}

const CartConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

export default CartConnector;
