
const searchForMovieStart = payload => ({
    type: 'SEARCH_FOR_MOVIE_START',
    payload,
});

const searchForMovieSucceed = payload => ({
    type: 'SEARCH_FOR_MOVIE_SUCCEED',
    payload,
});

const getMovieDetailStart = payload => ({
    type: 'GET_MOVIE_DETAIL_START',
    payload,
});

const getMovieDetailSucceed = payload => ({
    type: 'GET_MOVIE_DETAIL_SUCCEED',
    payload,
});

module.exports = {
    searchForMovieStart,
    searchForMovieSucceed,
    getMovieDetailStart,
    getMovieDetailSucceed,
};