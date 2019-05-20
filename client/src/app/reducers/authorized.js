import { SET_AUTHORIZED } from '../actions';

const reducer = (state = false, action) => {
    if (action.type === SET_AUTHORIZED) {
        return action.payload.authorized;
    }

    return state;
};

export default reducer;
