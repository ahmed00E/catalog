import React from 'react';
import { Link } from "react-router-dom"

class Home extends React.Component {
    render() {
        return (
             <div>
                {this.props.movies.map((movie) => (
					<Link 
                        to={`/${movie.id}`}
						style={{ display: "block", margin: "1rem" }}
					>
						{movie.title}
					</Link>
				))}
             </div>
        );
    }
}

export default Home
