import React from "react";
import Nav from "./Nav";
import { useHistory } from "react-router";

const PokeList = props => {
	const history = useHistory();
	return (
		<>
			<ul className="poke-list">
				{props.pokeList.map(poke => (
					<li
						className="poke-card"
						onClick={() => history.push(`/pokemon/${poke.name}`)}
						key={poke.name}
					>
						<h3>{poke.name}</h3>
					</li>
				))}
			</ul>
			<Nav
				handleNextPage={props.handleNextPage}
				handlePreviousPage={props.handlePreviousPage}
			/>
		</>
	);
};

export default PokeList;
