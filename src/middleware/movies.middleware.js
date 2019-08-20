
import {
    searchForMovieStart,
    searchForMovieSucceed,
    getMovieDetailStart,
    getMovieDetailSucceed,
} from '../actions';
import http from '../utils/http';

export default store => next => (action) => {
    const { type, payload } = action;
    switch (type) {
        case searchForMovieStart().type:
            return http.searchForMovie(payload)
                .then(res => store.dispatch(searchForMovieSucceed(res)));
        case getMovieDetailStart().type:
            return http.searchForMovie(payload)
                .then(res => store.dispatch(getMovieDetailSucceed(res)));
        default: next(action);
    }
};
