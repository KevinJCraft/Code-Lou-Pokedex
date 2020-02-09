import React, { useRef } from 'react';
import shortid from 'shortid'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import useOutsideClick from '../Hooks/useOutsideClick';


const InfoCard = () => {

    const pokemon = useLocation().state
    const infoCardRef = useRef()
    useOutsideClick(infoCardRef);


    return (
        <div className="poke-card info" ref={infoCardRef}>
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