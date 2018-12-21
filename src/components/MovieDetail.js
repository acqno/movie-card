import React from 'react';

const MovieDetail = (props) => {

    return (
        <div>
            <h1 className="movie-title">{props.movie.title}</h1>
            <h3 className="movie-release">{props.movie.release_date}</h3>
            <p className="movie-overview">{props.movie.overview}</p>
        </div>
    );
}

export default MovieDetail;