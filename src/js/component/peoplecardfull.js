import React from "react";
import PropTypes from "prop-types";
import { PeopleCard } from "./peoplecard";

export function PeopleCardFull(props) {
	return (
		<container className="individualcontainer">
			<img src="http://via.placeholder.com/640x360" className="individualimage" />

			<div className="individualcard">
				<h1 className="individualtitle">{props.name}</h1>
				<ul className="individualattributes">
					<li>Mass: {props.mass}</li>
					<li>Height: {props.height}</li>
					<li>Gender: {props.gender}</li>
					<li>
						Hair Color:
						{props.hair_color}
					</li>
				</ul>
				<ul className="individualattributes">
					<li>Eye Color: {props.eye_color}</li>
					<li>Skin Color: {props.skin_color}</li>
					<li>Mass: {props.mass}</li>
					<li>Birth Year: {props.birth_year}</li>
				</ul>
				<p>{props.description}</p>
			</div>
		</container>
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
