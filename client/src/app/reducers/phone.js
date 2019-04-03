import {SET_POST} from '../actions';

const reducer = (state = {}, action) => {
    if (action.type === SET_POST) {
        return {...state, ...action.payload};
    }

    return state;
};

export default reducer;
