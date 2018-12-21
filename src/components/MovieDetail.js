// this component takes the movie details passed from the App componnent and renders it to the page

import React from 'react';

const MovieDetail = (props) => {

    return (
        <div className="movie-details">
            <h1 className="movie-title">{props.movie.title}</h1>
            <h3 className="movie-release">{props.movie.release_date}</h3>
            <p className="movie-overview">{props.movie.overview}</p>
        </div>
    );
}

export default MovieDetail;