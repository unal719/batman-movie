import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from '../reducer';
import middlewareList from '../middleware';

const getCompose = () => {
    if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    return compose;
};

export default createStore(
    rootReducer,
    {}, // the initial state
    getCompose()(
        applyMiddleware(...middlewareList),
    ),
);