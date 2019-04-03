import {combineReducers} from 'redux';

import fetching from './fetching';
import posts from './posts';
import phone from './phone';

const reducer = combineReducers({
    fetching,
    posts,
    phone,
});

export default reducer;
