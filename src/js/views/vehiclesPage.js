import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { VehiclesCardFull } from "../component/vehiclescardfull";

export function VehiclesPage() {
	const [vehiclesPage, setVehiclesPage] = React.useState(null);
	const params = useParams();

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles/" + params.id)
			.then(res => res.json())
			.then(data => setVehiclesPage(data.result.properties))
			.catch(err => console.error(err));
	}, []);

	return <VehiclesCardFull {...(vehiclesPage !== null ? vehiclesPage : {})} />;
}
