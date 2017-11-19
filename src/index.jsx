import React from 'react';
import { render } from 'react-dom';
import { ProviderProps, Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { ConnectedRouter } from 'react-router-redux';

import configureStore, { history } from './store/configureStore';
import Root from './routes/index';
import '../public/css/index.scss';

const store = configureStore();

console.dir(store);
render(
    <Provider store={store} >
        <Router history={history}>
            <Root />
        </Router>
    </Provider>,
    document.getElementById('app')
);
