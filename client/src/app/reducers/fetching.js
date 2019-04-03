import {GET_POSTS, SET_POSTS, SET_POST} from '../actions';

const reducer = (state = false, action) => {
    if (action.type === GET_POSTS) {
        return true;
    }

    if (action.type === SET_POSTS) {
        return false;
    }

    if (action.type === SET_POST) {
        return false;
    }

    return state;
};

export default reducer;
