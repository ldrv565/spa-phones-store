import {
    FETCH,
    SET_AUTHORIZED,
    SET_POSTS,
    SET_CART,
    SET_CLOSE_CART,
    SET_POST,
    SET_VENDORS,
    PUT_CART,
    DELETE_CART
} from '../actions';

const reducer = (state = false, action) => {
    if (action.type === FETCH) {
        return true;
    }

    if (action.type === SET_AUTHORIZED) {
        return false;
    }

    if (action.type === SET_POSTS) {
        return false;
    }

    if (action.type === SET_CART) {
        return false;
    }

    if (action.type === SET_CLOSE_CART) {
        return false;
    }

    if (action.type === SET_POST) {
        return false;
    }

    if (action.type === SET_VENDORS) {
        return false;
    }

    if (action.type === PUT_CART) {
        return false;
    }

    if (action.type === DELETE_CART) {
        return false;
    }

    return state;
};

export default reducer;
