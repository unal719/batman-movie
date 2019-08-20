import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

class Detail extends Component {
  componentDidMount() {
    console.log('did amount')
    console.log(this.props.match.params.id);
    const id = +this.props.match.params.id;
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          console.log('res', result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          //this.setState({
          //  isLoaded: true,
          //   error
          //  });
        }
      )

  }
  render() {

    return (
      <div>
        detail

     </div>
    )
  }
}

export default Detail;