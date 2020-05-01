import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import loadable from 'react-loadable';

import store from './store';
import LoadComponent from './components/LoadComponent';

const AsyncAppComponent = loadable( {
    loader: () => import( './components/App' ),
    loading: LoadComponent
} );

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Provider store={store}>
                <AsyncAppComponent />
            </Provider>
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);
