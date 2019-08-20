import React, { PureComponent } from 'react';
import http from '../../utils/http'

class Detail extends PureComponent {
    constructor() {
        super();
        this.state = {
            detail: null
        }
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        http.getMovieDetail(id)
            .then(detail =>
                this.setState({ detail })
            );
    }

    render() {
        const { detail } = this.state;

        if (detail) {
            const { name, image: { original }, summary } = detail;
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
export default Detail;