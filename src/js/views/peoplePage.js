import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PeopleCardFull } from "../component/peoplecardfull";

export function PeoplePage() {
	const [peoplePage, setPeoplePage] = React.useState(null);
	const params = useParams();

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + params.id)
			.then(res => res.json())
			.then(data => setPeoplePage(data.result.properties))
			.catch(err => console.error(err));
	}, []);

	return <PeopleCardFull {...(peoplePage !== null ? peoplePage : {})} />;
}
