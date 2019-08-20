import { searchForMovieSucceed } from '../actions';

export default (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case searchForMovieSucceed().type: return payload;
        default: return state;
    }
};
