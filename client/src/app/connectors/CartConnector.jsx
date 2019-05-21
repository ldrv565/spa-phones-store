import { connect } from 'react-redux';

import { Cart } from '../pages';

import { getCart, deleteCart, closeCart } from '../actions';

function mapStateToProps(state) {
    return {
        cart: state.cart,
        fetching: state.fetching
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCart: () => dispatch(getCart()),
        deleteCart: (id, onSucces) => dispatch(deleteCart(id, onSucces)),
        closeCart: counts => dispatch(closeCart(counts))
    };
}

const CartConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

export default CartConnector;
