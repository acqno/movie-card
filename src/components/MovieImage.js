import React from 'react';
import '../css/component.css';

const MovieImage = (props) => {
    if(props.render === true) {
        return null;
    }

    return(
        <div className="movie-image__container">
            <img className="movie-image" alt="movie_poster" src={props.path}/>
        </div>
    );
}

export default MovieImage;