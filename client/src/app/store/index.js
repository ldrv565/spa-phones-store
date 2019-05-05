import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['phone', 'phones']
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
    const store = createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );
    const persistor = persistStore(store);
    return { store, persistor };
};
