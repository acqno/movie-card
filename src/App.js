import React from 'react';
import SearchBar from './components/SearchBar';
import MovieDetail from './components/MovieDetail';
import MovieImage from './components/MovieImage';
import moviedb from './apis/moviedb';
import Loader from './components/Loader';
import './css/component.css';

class App extends React.Component {
	state = { movie: [], img_path: '', loader: true };

	// this call back method takes the user input search title and searches the moviedb api 
	// it returns the data in a .json object that we store in variable response
	onTitleSubmit = async (term) => {
		const response = await moviedb.get('/search/movie', {
			params: {
				query: term
			}
		});

		this.setState({ loader: false });
		this.setState({ movie: response.data.results[0] });

		// finds the movie poster path of the searched movie
		const config = await moviedb.get('/configuration');
		const posterPath = config.data.images.base_url + 'w300' + this.state.movie.poster_path;
		
		this.setState({ img_path: posterPath });
		
		console.log(this.state.movie);
	};

	render() {
		return (
			<div>
				<SearchBar onTitleSubmit={this.onTitleSubmit} />
				<div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" >
					<Loader spin={this.state.loader} />

					<div className="uk-card-media-left">
						<MovieImage path={this.state.img_path} render={this.state.loader}/>
					</div>
					<div className="movie-details__container">
						<MovieDetail movie={this.state.movie} render={this.state.loader} />
					</div>
				</div>
			</div>	
		);
	}
}

export default App;
