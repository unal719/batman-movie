export default {
    baseUrl: 'http://api.tvmaze.com/',
    searchForMovie: function (movieName) {
        const url = `${this.baseUrl}search/shows?q=${movieName}`;
        return fetch(url)
            .then(res => res.json())
            .catch(reason => reason);
    }
}