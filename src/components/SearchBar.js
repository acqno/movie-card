import React from 'react';
import './component.css';

class SearchBar extends React.Component {
	state = { title: '' };

	onInputChange = event => {
		this.setState({ title: event.target.value });
	};

	onFormSubmit = event => {
		event.preventDefault();

		this.props.onTitleSubmit(this.state.title);
	};

	render() {
		return (
			<div className="search-container">
				<form
					onSubmit={this.onFormSubmit}
					className="uk-search uk-search-default"
				>
					<span uk-search-icon='true' />
					<input
						onChange={this.onInputChange}
						className="uk-search-input search-box"
						type="text"
						value={this.state.title}
						placeholder="Search movie..."
					/>
				</form>
			</div>
		);
	}
}

export default SearchBar;
