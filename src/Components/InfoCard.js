import React from 'react';
import shortid from 'shortid';

const InfoCard = ({ pokemonDetails, closeInfoCard }) => {

    return (
        <div className="poke-card info">
            <h1>{pokemonDetails.name}</h1><br />
            <img src={pokemonDetails.img} alt="Pokemon sprite" display="block" />
            <div className="details">
                <div className="columns">
                    <h4>Abilities</h4>
                    <ul>
                        {pokemonDetails.abilities.map(ability => (<li key={shortid.generate()}>{ability.ability.name}</li>))}
                    </ul>
                </div>
                <div className="columns">
                    <h4>Stats</h4>
                    <ul>
                        {pokemonDetails.stats.map(stat => (<li key={shortid.generate()}><span>{stat.stat.name}: </span><span>{stat.base_stat}</span></li>))}
                    </ul>
                </div>
            </div>
            <button onClick={closeInfoCard} className="btn close">close</button>


        </div>
    )
}

export default InfoCard;