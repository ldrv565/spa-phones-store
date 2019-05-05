import { combineReducers } from 'redux';

import fetching from './fetching';
import phones from './phones';
import cart from './cart';
import phone from './phone';

const reducer = combineReducers({
    fetching,
    phones,
    cart,
    phone
});

export default reducer;
