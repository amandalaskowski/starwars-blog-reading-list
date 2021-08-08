import React from "react";
import PropTypes from "prop-types";
import { FavoritesContext } from "../views/FavoritesContext";

export function VehiclesCard(props) {
	const [vehiclesPage, setVehiclesPage] = React.useState(null);
	const [favorites, setFavorites] = React.useContext(FavoritesContext);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles/" + props.uid)
			.then(res => res.json())
			.then(data => setVehiclesPage(data.result))
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
							{vehiclesPage !== null && <li>Model: {vehiclesPage.properties.model}</li>}
							{vehiclesPage !== null && <li>Crew: {vehiclesPage.properties.crew}</li>}
							{vehiclesPage !== null && (
								<li>Max Atmosphering Speed: {vehiclesPage.properties.max_atmosphering_speed}</li>
							)}
						</ul>
					</p>

					<p className="card-text">
						<a className="learnmore" href={"/vehicles/" + props.uid}>
							Learn more about {props.name}
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

VehiclesCard.propTypes = {
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
