import React from "react";
import PropTypes from "prop-types";
import { PeopleCard } from "./peoplecard";

export function PeopleCardFull(props) {
	return (
		<div>
			<li>{props.name}</li>
			<li>{props.height}</li>
			<li>{props.gender}</li>
		</div>
	);
}

PeopleCardFull.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	height: PropTypes.string,
	mass: PropTypes.string,
	hair_color: PropTypes.string,
	skin_color: PropTypes.string,
	eye_color: PropTypes.string,
	birth_year: PropTypes.number,
	gender: PropTypes.string,
	description: PropTypes.string
};
