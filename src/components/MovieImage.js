import React from 'react';
import './component.css';

const MovieImage = (props) => {
    return <img className="movie-image" alt="movie_poster" src={props.path}/>;

}

export default MovieImage;