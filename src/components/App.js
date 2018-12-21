import React from 'react';
import SearchBar from './SearchBar';
import MovieDetail from './MovieDetail';
import moviedb from '../apis/moviedb';

class App extends React.Component {
	state = { movie: [] };

	// this call back method takes the user input search title and searches the moviedb api 
	// it returns the data in a .json object that we store in variable response
	onTitleSubmit = async (term) => {
		const response = await moviedb.get('/search/movie', {
			params: {
				query: term
			}
		});

		this.setState({ movie: response.data.results[0] });
		console.log(this.state.movie);
	};

	render() {
		return (
			<div className="uk-container uk-container-large">

				<div className="movie-details__container">
					<MovieDetail movie={this.state.movie} />
				</div>
				<div className="movie-poster__container">

				</div>
				<SearchBar onTitleSubmit={this.onTitleSubmit} />
			</div>
		);
	}
}

export default App;
