import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import AppConnector from './connectors/AppConnector';
import createStore from './store';

const {store, persistor} = createStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <AppConnector />
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
