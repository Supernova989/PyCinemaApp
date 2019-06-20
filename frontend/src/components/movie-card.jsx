import React from "react";
import PropTypes from "prop-types";

function MovieCard(props) {
	const {
		title,
	} = props.movie;
	return (
		<article>
			<h4>{title}</h4>
		</article>
	)
}

MovieCard.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired
	}).isRequired,
};

export default MovieCard;
