import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { VehiclesCard } from "../component/vehiclescard";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";

export function VehiclesList() {
	const [vehicles, setVehicles] = useState([]);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles")
			.then(res => res.json())
			.then(data => setVehicles(data.results))
			.catch(err => console.error(err));
	}, []);

	return (
		<container className="container">
			<h1 className="peopletitle">Vehicles</h1>

			{vehicles.map((vehicle, index) => {
				return <VehiclesCard key={index} name={vehicle.name} uid={vehicle.uid} />;
			})}
		</container>
	);
}
