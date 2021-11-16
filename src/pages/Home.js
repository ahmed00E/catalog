import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import movies from '../movies.json'

class Home extends Component {
  render() {
    return (
      <>
        {movies.map(movie => (
          <Link key={movie.title} to={`/movies/${movie.id}`}>
            <p>{movie.title}</p>
          </Link>
        ))}
      </>
    );
  }
}

export default Home