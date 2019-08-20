import React, { PureComponent } from 'react';
// shouldComponentUpdate lifecycle method => pureComponent = implemented by react people

// import http from '../../utils/http'
import Movies from './components/movies.component'
import { connect } from 'react-redux';
import { searchForMovieStart } from '../../actions';
class Home extends PureComponent {
    /**
     * before redux
     */
    // constructor() {
    //     super();
    //     this.name = 'batman'
    //     this.state = {
    //         movies: []
    //     }
    // }

    componentDidMount() {
        /**
         * before redux
         */
        // http.searchForMovie(this.name)
        //     .then(movies =>
        //         this.setState({ movies })
        //     );

        const { searchForMovieStartAction } = this.props;
        searchForMovieStartAction('batman');
    }

    render() {
        const { movies } = this.props;
        return <Movies movies={movies} />
    }
}

const initMapStateToProps = ({ movies }) => ({ movies });
export default connect(initMapStateToProps, { searchForMovieStartAction: searchForMovieStart })(Home);