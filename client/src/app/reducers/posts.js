import {SET_POSTS} from '../actions';

const reducer = (state = [], action) => {
    if (action.type === SET_POSTS) {
        return action.payload.posts;
    }

    return state;
};

export default reducer;
