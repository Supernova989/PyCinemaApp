import React, { useState } from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function MovieCard(props) {
	const {
		id,
		title,
		image,
		description
	} = props.movie;
	return (
		<article className='movie-card'>
			<div className="img-wrap">
				<Link to={'/movies/' + id}>
					<img src={process.env.REACT_APP_HOST + image}/>
				</Link>
			</div>
			<div className="title">
				{title}
			</div>
			<div className="description">
				{description}
			</div>
		</article>
	)
}

MovieCard.propTypes = {
	movie: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		
	}).isRequired,
};

export default MovieCard;
