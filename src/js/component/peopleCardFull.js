import React from "react";
import PropTypes from "prop-types";

export function PeopleCardFull(props) {
	return (
		<div>
			<p>{props.name}</p>
			<p>{props.height}</p>
		</div>
	);
}

PeopleCardFull.propTypes = {
	uid: PropTypes.string,
	height: PropTypes.string,
	mass: PropTypes.string,
	hair_color: PropTypes.string,
	skin_color: PropTypes.string,
	eye_color: PropTypes.string,
	birth_year: PropTypes.number,
	gender: PropTypes.string,
	description: PropTypes.string,
	name: PropTypes.string
};
