import React from "react";
import { useHistory } from "react-router";
import { allPokemonNames } from "../Hooks/allPokemonNames";
import Downshift from "downshift";
import matchSorter from "match-sorter";

const SearchBar = () => {
	const history = useHistory();

	const getItems = value =>
		value ? matchSorter(allPokemonNames, value) : allPokemonNames;

	function handleSubmit(event, name, clearSelection) {
		event.preventDefault();
		event.target.children[1].blur();
		name && history.push(`/pokemon/${name}`);
		clearSelection();
	}

	return (
		<div>
			<Downshift>
				{({
					highlightedIndex,
					getItemProps,
					getLabelProps,
					getInputProps,
					isOpen,
					getMenuProps,
					selectItem,
					inputValue,
					clearSelection
				}) => (
					<form
						className="inputForm"
						onSubmit={event => handleSubmit(event, inputValue, clearSelection)}
					>
						<label {...getLabelProps()}></label>
						<input {...getInputProps()} className="search-bar" />
						<ul
							{...getMenuProps({
								style: { maxHeight: 300, overflowY: "scroll" }
							})}
							className="autoComplete"
						>
							{isOpen
								? getItems(inputValue).map((pokemon, index) => (
										<li
											className="suggestion"
											{...getItemProps({
												onClick: () => selectItem(pokemon),
												item: pokemon,
												key: pokemon,
												style: {
													backgroundColor:
														index === highlightedIndex ? "grey" : null
												}
											})}
										>
											{pokemon}
										</li>
								  ))
								: null}
						</ul>
					</form>
				)}
			</Downshift>
		</div>

		// <form onSubmit={handleSubmit} className="inputForm">
		// 	<input
		// 		className="search-bar"
		// 		type="text"
		// 		placeholder="Search..."
		// 		onChange={handleChange}
		// 		value={inputText}
		// 		autoFocus
		// 	></input>
		// 	<div ref={errorDiv} className={"error"}>
		// 		Pokemon not found
		// 	</div>
		// </form>
	);
};

export default SearchBar;
