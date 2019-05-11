import { SET_VENDORS } from '../actions';

const reducer = (state = [], action) => {
    if (action.type === SET_VENDORS) {
        return action.payload.vendors;
    }

    return state;
};

export default reducer;
