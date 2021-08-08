import React from "react";
import PropTypes from "prop-types";
import { FavoritesContext } from "../views/FavoritesContext";

export function PeopleCard(props) {
	const [peoplePage, setPeoplePage] = React.useState(null);
	const [favorites, setFavorites] = React.useContext(FavoritesContext);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + props.uid)
			.then(res => res.json())
			.then(data => setPeoplePage(data.result))
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
							{peoplePage !== null && <li>Height: {peoplePage.properties.height}</li>}
							{peoplePage !== null && <li>Mass: {peoplePage.properties.mass}</li>}
							{peoplePage !== null && <li>Gender: {peoplePage.properties.gender}</li>}
						</ul>
					</p>

					<p className="card-text">
						<a className="learnmore" href={"/people/" + props.uid}>
							Learn more about {props.name}
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

PeopleCard.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	height: PropTypes.string,
	mass: PropTypes.string,
	gender: PropTypes.string
};
