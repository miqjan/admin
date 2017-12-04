import React from 'react';
import { render } from 'react-dom';
import { ProviderProps, Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { ConnectedRouter } from 'react-router-redux';

import configureStore, { history } from './store/configureStore';
import Root from './routes/index';
import '../public/css/index.scss';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
// import '../node_modules/react-bootstrap-table/css/toastr.css';

const store = configureStore();


render(
    <Provider store={store} >
        <Router history={history}>
            <Root />
        </Router>
    </Provider>,
    document.getElementById('app')
);
