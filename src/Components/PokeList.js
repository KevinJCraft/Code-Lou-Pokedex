import React from 'react';
import shortid from 'shortid';


const PokeList = ({ pokeList, displayInfoCard }) => {

    return (
        <ul className="poke-list">
            {pokeList.map(poke => (
                <li
                    className="poke-card"
                    onClick={() => displayInfoCard(poke.url)}
                    key={shortid.generate()}
                >
                    <h3>{poke.name}</h3>
                </li>

            ))}
        </ul>

    )

}

export default PokeList;