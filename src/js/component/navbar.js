import React from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../views/FavoritesContext";

export const Navbar = () => {
	const [favorites, setFavorites] = React.useContext(FavoritesContext);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/home">
				<img
					className="logo"
					src="https://compass-ssl.xboxlive.com/assets/67/1c/671c739e-386a-4df3-9774-30e9e46eb53a.jpg?n=MSXC-StarWarsTitle-HeroAndImageCard-large-l-794x447-16x9-01.jpg"
				/>
			</Link>
			<ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton1">
				{favorites.map((item, index) => {
					return (
						<li key={index}>
							<a className="dropdown-item" href="#">
								{item}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
