import { SET_CART, SET_CLOSE_CART } from '../actions';

const reducer = (state = null, action) => {
    if (action.type === SET_CART) {
        return action.payload.phones;
    }

    if (action.type === SET_CLOSE_CART) {
        return null;
    }

    return state;
};

export default reducer;
