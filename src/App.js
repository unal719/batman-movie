import React from 'react';
import LayoutComponent from './components/layout.component';
import Router from './Router';
import { Provider } from 'react-redux';
import store from './store';
export default () =>
    <Provider store={store}>
        <LayoutComponent>
            <Router />
        </LayoutComponent>
    </Provider>;