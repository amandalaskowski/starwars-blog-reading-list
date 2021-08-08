import React from "react";
import PropTypes from "prop-types";
import { FavoritesContext } from "../views/FavoritesContext";

export function PlanetsCard(props) {
	const [planetsPage, setPlanetsPage] = React.useState(null);
	const [favorites, setFavorites] = React.useContext(FavoritesContext);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/planets/" + props.uid)
			.then(res => res.json())
			.then(data => setPlanetsPage(data.result))
			.catch(err => console.error(err));
	}, []);

	const handleClickFavorite = () => {
		let newFavorites = favorites.concat([props.name]);
		setFavorites(newFavorites);
	};

	const handleClickUnFavorite = () => {
		let newFavorites = favorites.filter(item => item !== props.name);
		setFavorites(newFavorites);
	};

	return (
		<div className="card-group">
			<div className="card">
				<img src="http://via.placeholder.com/640x360" className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">
						{props.name}
						{!favorites.includes(props.name) ? (
							<button className="btn btn-outline-danger favoritesbutton" onClick={handleClickFavorite}>
								❤️
							</button>
						) : (
							<button className="btn btn-danger favoritesbutton" onClick={handleClickUnFavorite}>
								❤️
							</button>
						)}
					</h5>
					<p className="card-text">
						<ul>
							{planetsPage !== null && <li>Population: {planetsPage.properties.population}</li>}
							{planetsPage !== null && <li>Terrain: {planetsPage.properties.terrain}</li>}
							{planetsPage !== null && <li>Orbital Period: {planetsPage.properties.orbital_period}</li>}
						</ul>
					</p>

					<p className="card-text">
						<a className="learnmore" href={"/planets/" + props.uid}>
							Learn more about {props.name}
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

PlanetsCard.propTypes = {
	name: PropTypes.string,
	rotation_period: PropTypes.string,
	orbital_period: PropTypes.string,
	gravity: PropTypes.string,
	population: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string,
	surface_water: PropTypes.string,
	diameter: PropTypes.string,
	uid: PropTypes.string
};
