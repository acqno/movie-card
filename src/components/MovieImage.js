import React from 'react';
import '../css/component.css';

const MovieImage = (props) => {
    if(props.render === true) {
        return null;
    }

    return <img className="movie-image" alt="movie_poster" src={props.path}/>;
}

export default MovieImage;