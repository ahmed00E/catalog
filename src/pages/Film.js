import React from 'react'

class Film extends React.Component {
    render() {
        const movie = this.props.movies.find(
            (movie) => movie.id.toString() === this.props.match.params.id);
        return (
             <div>
                <p>{movie.title}</p>
                <p>{movie.description}</p>
             </div>
        );
    }
}

export default Film