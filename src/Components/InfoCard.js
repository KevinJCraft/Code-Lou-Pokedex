import React, { useRef, useEffect, useState } from "react";
import shortid from "shortid";
import { Link, useHistory, useParams } from "react-router-dom";
import useOutsideClick from "../Hooks/useOutsideClick";
import axios from "axios";

const InfoCard = ({ toggleLoading }) => {
	const { pokemon } = useParams();
	const [pokemonStats, setPokemonStats] = useState();
	const history = useHistory();
	const infoCardRef = useRef();
	useOutsideClick(infoCardRef);

	setTimeout(() => {
		let scroll = require("scroll-to-element");
		scroll(".infoCard", {
			offset: 0,
			ease: "linear",
			duration: 250
		});
	}, 500);

	const fetchPokemon = () => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
			.then(response => {
				setPokemonStats(response.data);
			})
			.catch(error => history.push(`/error/${error.message}`));
	};

	useEffect(() => {
		toggleLoading(false);
	}, [pokemonStats]);

	useEffect(() => {
		toggleLoading(true);
		fetchPokemon();
	}, []);

	return pokemonStats ? (
		<div className="infoCard" ref={infoCardRef}>
			<h1>{pokemonStats.name.toUpperCase()}</h1>
			<br />
			{pokemonStats.sprites.front_default && (
				<img
					src={pokemonStats.sprites.front_default}
					alt="Pokemon sprite"
					display="block"
				/>
			)}
			<div className="details">
				<div className="columns">
					<h3>Abilities</h3>
					<ul>
						{pokemonStats.abilities.map(ability => (
							<li key={shortid.generate()}>{ability.ability.name}</li>
						))}
					</ul>
				</div>
				<div className="columns">
					<h3>Stats</h3>
					<ul>
						{pokemonStats.stats.map(stat => (
							<li key={shortid.generate()}>
								<span>{stat.stat.name}: </span>
								<span>{stat.base_stat}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
			<Link to="/">
				<button className="btn close">close</button>
			</Link>
		</div>
	) : null;
};

export default InfoCard;
