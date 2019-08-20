import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Detail from './Detail';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      items: []
    };
  }

  componentDidMount() {
    console.log('did amount')
    fetch("https://api.tvmaze.com/search/shows?q=batman")
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

        <Route exact path="/" render={() => (
          <ul>
            {
              this.state.items.map((item, idx) => {
                return (
                  <Link to={`/detail/${item.show.id}`}>
                    <li key={item.show.id}> {item.show.name} </li>
                  </Link>
                )
              })
            }
          </ul>
        )} />

        <Route path="/detail/:id" component={Detail} />

      </div>
    );
  }
}

export default App;