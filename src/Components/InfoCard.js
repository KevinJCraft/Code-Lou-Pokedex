import React from 'react';
import shortid from 'shortid'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'


const InfoCard = () => {

    const pokemon = useLocation().state

    return (
        <div className="poke-card info">
            <h1>{pokemon.name}</h1><br />
            {pokemon.sprites.front_default && <img src={pokemon.sprites.front_default} alt="Pokemon sprite" display="block" />}
            <div className="details">
                <div className="columns">
                    <h4>Abilities</h4>
                    <ul>
                        {pokemon.abilities.map(ability => (<li key={shortid.generate()}>{ability.ability.name}</li>))}
                    </ul>
                </div>
                <div className="columns">
                    <h4>Stats</h4>
                    <ul>
                        {pokemon.stats.map(stat => (<li key={shortid.generate()}><span>{stat.stat.name}: </span><span>{stat.base_stat}</span></li>))}
                    </ul>
                </div>
            </div>
            <Link to='/'><button className="btn close">close</button></Link>
        </div>
    )
}

export default InfoCard;