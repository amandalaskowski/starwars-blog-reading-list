import React from "react";
import PropTypes from "prop-types";
import { VehiclesCard } from "./vehiclescard";

export function VehiclesCardFull(props) {
	return (
		<container className="individualcontainer">
			<img src="http://via.placeholder.com/640x360" className="individualimage" />

			<div className="individualcard">
				<h1 className="individualtitle">{props.name}</h1>
				<ul className="individualattributes">
					<li>Manufacturer: {props.manufacturer}</li>
					<li>Cost In Credits: {props.cost_in_credits}</li>
					<li>Length: {props.length}</li>
					<li>
						Crew:
						{props.crew}
					</li>
				</ul>
				<ul className="individualattributes">
					<li>Passengers: {props.passengers}</li>
					<li>Max Atmosphering Speed: {props.max_atmosphering_speed}</li>
					<li>Model: {props.model}</li>
					<li>Cargo Capacity: {props.cargo_capacity}</li>
				</ul>
			</div>
		</container>
	);
}

VehiclesCardFull.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	manufacturer: PropTypes.string,
	cost_in_credits: PropTypes.string,
	length: PropTypes.string,
	crew: PropTypes.string,
	passengers: PropTypes.string,
	max_atmosphering_speed: PropTypes.string,
	cargo_capacity: PropTypes.string,
	model: PropTypes.string
};
