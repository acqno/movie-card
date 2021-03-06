import React from 'react';
import '../css/component.css';

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
			<div className="uk-container search-container">
				<form
					onSubmit={this.onFormSubmit}
					className="uk-search uk-search-default"
				>
					<span uk-icon="icon: search"></span>
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
