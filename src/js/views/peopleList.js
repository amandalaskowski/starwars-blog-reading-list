import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { PeopleCard } from "../component/peoplecard";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";

export function PeopleList() {
	const [people, setPeople] = useState([]);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => setPeople(data.results))
			.catch(err => console.error(err));
	}, []);

	return (
		<container className="container">
			<h1 className="peopletitle">People</h1>

			{people.map((person, index) => {
				return <PeopleCard key={index} name={person.name} uid={person.uid} />;
			})}
		</container>
	);
}
