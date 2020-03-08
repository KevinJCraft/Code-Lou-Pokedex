import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import shortid from "shortid";

import PokeList from "./PokeList";
import InfoCard from "./InfoCard";
import NotFound from "./NotFound";
import SearchBarUI from "./SearchBarUI";

const MainContent = props => {
	const [pokeList, setPokeList] = useState([]);
	const [nextPage, setNextPage] = useState("");
	const [prevPage, setPrevPage] = useState("");
	const getPokeList = url => {
		if(!url) return
		axios
			.get(url)
			.then(response => {
				setPokeList(
					response.data.results.map(pokemon => ({
						name: pokemon.name,
						url: pokemon.url,
						key: shortid.generate()
					}))
				);
				setNextPage(response.data.next);
				setPrevPage(response.data.previous);
			})
			.catch(error => console.log(error));
	};

	useEffect(() => {
		getPokeList(`https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0`);
	}, []);

	return (
		<>
			<div id="main-content">
				<Router>
					<SearchBarUI />
					<Switch>
						<Route
							path="/"
							exact
							render={props => (
								<PokeList
									{...props}
									pokeList={pokeList}
									handleNextPage={() => getPokeList(nextPage)}
									handlePreviousPage={() => getPokeList(prevPage)}
								/>
							)}
						/>
						<Route path="/pokemon/:pokemon" render={() => <InfoCard />} />
						<Route path="/error/:message" component={NotFound} />
					</Switch>
				</Router>
			</div>
			<img
				id="pikachu"
				className="hvr-hang"
				src="https://raw.githubusercontent.com/CodeLouisville/FSJS-Weekly-Challenges/master/Challenges/Week5/images/pikachu.png"
				alt="Pikachu"
			/>
		</>
	);
};

export default MainContent;
