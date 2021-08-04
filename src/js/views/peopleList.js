import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import { Context } from "../store/appContext";

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
				return (
					<div key={index} className="card-group">
						<div className="card">
							<img src="http://via.placeholder.com/640x360" className="card-img-top" />
							<div className="card-body">
								<h5 className="card-title">{person.name}</h5>
								<p className="card-text">
									<li>{{ index }.height}</li>
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</container>
	);
}
