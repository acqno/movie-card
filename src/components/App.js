import React from 'react';
import SearchBar from './SearchBar';
import MovieDetail from './MovieDetail';
import MovieImage from './MovieImage';
import moviedb from '../apis/moviedb';

class App extends React.Component {
	state = { movie: [], img_path: '' };

	// this call back method takes the user input search title and searches the moviedb api 
	// it returns the data in a .json object that we store in variable response
	onTitleSubmit = async (term) => {
		const response = await moviedb.get('/search/movie', {
			params: {
				query: term
			}
		});

		this.setState({ movie: response.data.results[0] });

		// finds the movie poster path of the searched movie
		const config = await moviedb.get('/configuration');
		const posterPath = config.data.images.base_url + 'w300' + this.state.movie.poster_path;
		
		this.setState({ img_path: posterPath });
		console.log(response);
		console.log(posterPath);
	};

	render() {
		return (
			<div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin">
				<div className="uk-card-media-left movie-image__container">
					<MovieImage  path={this.state.img_path}/>
				</div>
				<div className="movie-details__container">
					<MovieDetail movie={this.state.movie} />
				</div>
				
				<SearchBar onTitleSubmit={this.onTitleSubmit} />
			</div>
		);
	}
}

export default App;
