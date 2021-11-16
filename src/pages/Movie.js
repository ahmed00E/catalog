import React, { Component } from 'react'

import movies from '../movies.json'

class Movie extends Component {
  render() {
    const { id } = this.props.match.params
    const film = movies.find(movie => movie.id === Number(id))

    if (!film) {
      return <p>Le film n'existe pas</p>
    }

    return (
      <>
        <p>{film.title}</p>
        <img src={film.image} />
        <p>{film.director}</p>
        <p>{film.description}</p>
      </>
    )
  }
}

export default Movie