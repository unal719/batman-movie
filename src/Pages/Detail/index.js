import React, { PureComponent } from 'react';
// import http from '../../utils/http'
import { connect } from 'react-redux';
import { getMovieDetailStart } from '../../actions';
class Detail extends PureComponent {

    /**
     * before redux
     */
    // constructor() {
    //     super();
    //     this.state = {
    //         detail: null
    //     }
    // }

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        // http.getMovieDetail(id)
        //     .then(detail =>
        //         this.setState({ detail })
        //     );

        const { getMovieDetailStartAction } = this.props;
        getMovieDetailStartAction(id);

    }

    render() {
        /**
         * before redux
         */
        // const { detail } = this.state;
        const { movie } = this.props;

        if (movie) {
            const { name, image: { original }, summary } = movie;
            return (
                <>
                    <h5>{name}</h5>
                    <div dangerouslySetInnerHTML={{ __html: summary }} />
                    <img src={original} alt={`${name} images goes here`} />
                </>
            );
        }
        return <div>Loading</div>
    }
}

const initMapStateToProps = ({ movie }) => ({ movie });
export default connect(initMapStateToProps, { getMovieDetailStartAction: getMovieDetailStart })(Detail);