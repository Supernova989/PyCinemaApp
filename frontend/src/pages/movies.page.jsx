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
				<h1 className="page-title">Movies</h1>
				
				<ul className='movie-list-full'>
					{this.props.movies.items.map((movie) => {
						return (
							<li key={movie.id} className='movie-list-item'>
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
	movies: PropTypes.shape({
		items: PropTypes.array
	}).isRequired,
};

function mapStateToProps(state) {
	return {
		movies: state.movies
	}
}

export default connect(mapStateToProps)(MoviesPage);
