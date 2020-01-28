import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

const Pokedex = require("pokeapi-js-wrapper");

const PokeClient = new Pokedex.Pokedex({
  protocol: "https",
  cache: true,
  timeout: 5000
});

function App() {
  const pokeList = [
    {
      name: "Bulbasaur"
    },
    {
      name: "Ivysaur"
    },
    {
      name: "Venusaur"
    }
  ];

  return (
    <div className="App">
      <div className="header">
        <img
          className="header-logo"
          src="https://raw.githubusercontent.com/CodeLouisville/FSJS-Weekly-Challenges/master/Challenges/Week5/images/pokedex.png"
          alt="pokedex logo"
        />
        <h1>Pok&eacute;dex</h1>
      </div>

      <div id="main-content">
        <ul>
          {pokeList.map(poke => (
            <li className="poke-card" key={poke.name}>
              <h3>{poke.name}</h3>
            </li>
          ))}
        </ul>

        <button id="previous" className="btn">
          Previous
        </button>
        <button id="next" className="btn">
          Next
        </button>
      </div>

      <img
        id="pikachu"
        className="hvr-hang"
        src="https://raw.githubusercontent.com/CodeLouisville/FSJS-Weekly-Challenges/master/Challenges/Week5/images/pikachu.png"
        alt="Pikachu"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
