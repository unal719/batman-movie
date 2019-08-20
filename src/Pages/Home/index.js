import React, { PureComponent } from 'react';
// shouldComponentUpdate lifecycle method => pureComponent = implemented by react people

import http from '../../utils/http'
import Movies from './components/movies.component'

class Home extends PureComponent {
    constructor() {
        super();
        this.name = 'batman'
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        http.searchForMovie(this.name)
            .then(movies =>
                this.setState({ movies })
            );
    }

    render() {
        const { movies } = this.state;
        return <Movies movies={movies} />
    }
}
export default Home;