import React from "react";
import PropTypes from "prop-types";
import { PlanetsCard } from "./planetscard";

export function PlanetsCardFull(props) {
	return (
		<container className="individualcontainer">
			<img src="http://via.placeholder.com/640x360" className="individualimage" />

			<div className="individualcard">
				<h1 className="individualtitle">{props.name}</h1>
				<ul className="individualattributes">
					<li>Rotation Period: {props.rotation_period}</li>
					<li>Orbital Period: {props.orbital_period}</li>
					<li>Gravity: {props.gravity}</li>
					<li>
						Population:
						{props.population}
					</li>
				</ul>
				<ul className="individualattributes">
					<li>Climate: {props.climate}</li>
					<li>Terrain: {props.terrain}</li>
					<li>Surface Water: {props.surface_water}</li>
					<li>Diameter: {props.diameter}</li>
				</ul>
			</div>
		</container>
	);
}

PlanetsCardFull.propTypes = {
	name: PropTypes.string,
	rotation_period: PropTypes.string,
	orbital_period: PropTypes.string,
	gravity: PropTypes.string,
	population: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string,
	surface_water: PropTypes.string,
	diameter: PropTypes.string
};
