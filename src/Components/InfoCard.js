import React, { useRef, useEffect, useState } from "react";
import shortid from "shortid";
import { Link, useHistory, useParams } from "react-router-dom";
import useOutsideClick from "../Hooks/useOutsideClick";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";

const InfoCard = () => {
	const { pokemon } = useParams();
	const [pokemonStats, setPokemonStats] = useState();
	const [loading, setLoading] = useState(true);
	const history = useHistory();
	const infoCardRef = useRef();
	useOutsideClick(infoCardRef);

	setTimeout(() => {
		let scroll = require("scroll-to-element");
		scroll(".infoCard", {
			offset: -10,
			ease: "linear",
			duration: 250
		});
	}, 500);

	const fetchPokemon = React.useCallback(
		() => {
			axios
				.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
				.then(response => {
					setPokemonStats(response.data);
					setLoading(false);
				})
				.catch(error => history.push(`/error/${error.message}`));
			},[history, pokemon]
	) 

	useEffect(() => {
		fetchPokemon();

		return () => setLoading(false);
	}, [fetchPokemon]);

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
	) : (
		<LoadingOverlay active={loading} spinner text="Gotta catch'em all!" />
	);
};

export default InfoCard;
