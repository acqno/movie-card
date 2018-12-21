import React from 'react';
import SearchBar from './SearchBar';
import MovieDetail from './MovieDetail';
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
		const posterPath = config.data.images.base_url + '/original' + this.state.movie.poster_path;
		
		this.setState({ img_path: posterPath });
		//console.log(this.state.img_path);
	};

	render() {
		return (
			<div className="uk-container uk-container-large movie-card">
				<div className="movie-poster__container">

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
