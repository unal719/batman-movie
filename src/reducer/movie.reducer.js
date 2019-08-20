import { getMovieDetailSucceed } from '../actions';

export default (state = null, action) => {
    const { type, payload } = action;
    switch (type) {
        case getMovieDetailSucceed().type: return payload;
        default: return state;
    }
};