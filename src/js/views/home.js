import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<container className="homecontainer">
			<div className="homedivs">
				<a href="/vehicles">
					<div className="picturetitle">Vehicles</div>

					<img
						className="homeimage"
						src="https://i.pinimg.com/originals/64/03/a8/6403a8404e956e4e6aceb439a88132ed.jpg"
					/>
				</a>
			</div>

			<div className="homedivs">
				<a href="/people">
					<div className="picturetitle">People</div>
					<img
						className="homeimage"
						src="https://i.pinimg.com/736x/43/30/26/433026a576de0db6e6af65e588de603d.jpg"
					/>
				</a>
			</div>

			<div className="homedivs">
				<div className="picturetitle">Planets</div>
				<a href="/planets">
					<img className="homeimage" src="https://wallpaperaccess.com/full/2418848.jpg" />
				</a>
			</div>
		</container>
	</div>
);
