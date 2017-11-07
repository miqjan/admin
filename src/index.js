import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

import configureStore, { history } from './store/configureStore';
import Root from './routes/index';
import '../public/css/index.scss';
const store = configureStore();


render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Root />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
