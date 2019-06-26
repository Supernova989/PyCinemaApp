import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Container, Row, Col} from 'reactstrap';
import {get_movies} from "../actions";
import MovieCard from "../components/movie-card";

class MoviePage extends Component {
	componentDidMount() {
		// this.props.dispatch(get_movies(1));
	}
	
	render() {
		
		console.log('==>', this.props);
		const {id} = this.props.match.params;
		return (
			<>
				<h1 className="page-title">Movie - {id}</h1>
				
				<Row>
					<div className="big-picture-wrap">
						<img src="" alt=""/>
					</div>
				</Row>
				{/*<ul className='movie-list-full'>*/}
				{/*	{this.props.movies.items.map((movie) => {*/}
				{/*		return (*/}
				{/*			<li key={movie.id} className='movie-list-item'>*/}
				{/*				<MovieCard movie={movie}/>*/}
				{/*			</li>*/}
				{/*		)*/}
				{/*	})}*/}
				{/*</ul>*/}
			</>
		)
	}
}

MoviePage.propTypes = {
	// movies: PropTypes.shape({
	// 	items: PropTypes.array
	// }).isRequired,
};

function mapStateToProps(state) {
	return {
		movies: state.movies
	}
}

export default connect(mapStateToProps)(MoviePage);
