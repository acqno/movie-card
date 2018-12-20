import React from 'react';
import SearchBar from './SearchBar';
import moviedb from '../apis/moviedb';

class App extends React.Component {


	onTitleSubmit = (term) => {
		moviedb.get('/search/movie', {
			params: {
				query: term
			}
		});
	};

	render() {
		return (
			<div className="uk-container uk-container-large">
				<SearchBar onTitleSubmit={this.onTitleSubmit} />
				<div className="movie-details__container">

				</div>
				<div classname="movie-poster__container">

				</div>
			</div>
		);
	}
}

export default App;
