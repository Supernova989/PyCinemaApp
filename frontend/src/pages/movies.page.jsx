import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {get_movies} from "../actions";
import MovieCard from "../components/movie-card";

class MoviesPage extends Component {
	componentDidMount() {
		this.props.dispatch(get_movies(1));
	}
	
	render() {
		return (
			<>
				<h1>Movies</h1>
				
				<ul>
					{this.props.movies.items.map((movie) => {
						return (
							<li key={movie.id}>
								<MovieCard movie={movie}/>
							</li>
						)
					})}
				</ul>
			</>
		)
	}
}

MoviesPage.propTypes = {
	movies: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
	return {
		movies: state.movies
	}
}

export default connect(mapStateToProps)(MoviesPage);
