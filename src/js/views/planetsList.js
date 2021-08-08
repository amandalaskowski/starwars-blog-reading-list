import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { PlanetsCard } from "../component/planetscard";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";

export function PlanetsList() {
	const [planets, setPlanets] = useState([]);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/planets/")
			.then(res => res.json())
			.then(data => setPlanets(data.results))
			.catch(err => console.error(err));
	}, []);

	return (
		<container className="container">
			<h1 className="peopletitle">Planets</h1>

			{planets.map((planet, index) => {
				return <PlanetsCard key={index} name={planet.name} uid={planet.uid} population={planet.population} />;
			})}
		</container>
	);
}
