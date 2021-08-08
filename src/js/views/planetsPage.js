import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PlanetsCardFull } from "../component/planetscardfull";

export function PlanetsPage() {
	const [planetsPage, setPlanetsPage] = React.useState(null);
	const params = useParams();

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/planets/" + params.id)
			.then(res => res.json())
			.then(data => setPlanetsPage(data.result.properties))
			.catch(err => console.error(err));
	}, []);

	return <PlanetsCardFull {...(planetsPage !== null ? planetsPage : {})} />;
}
