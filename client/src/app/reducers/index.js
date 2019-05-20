import { combineReducers } from 'redux';

import authorized from './authorized';
import fetching from './fetching';
import phones from './phones';
import vendors from './vendors';
import cart from './cart';
import phone from './phone';

const reducer = combineReducers({
    authorized,
    fetching,
    phones,
    vendors,
    cart,
    phone
});

export default reducer;
