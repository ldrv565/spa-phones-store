import { SET_CART } from '../actions';

const reducer = (state = [], action) => {
    if (action.type === SET_CART) {
        return action.payload.phones;
    }

    return state;
};

export default reducer;
