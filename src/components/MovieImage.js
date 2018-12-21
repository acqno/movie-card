import React from 'react';
import './component.css';

const MovieImage = (props) => {
    return(
        <div>
            <img alt="movie_poster" src={props.path}/>
        </div>
    );
}

export default MovieImage;