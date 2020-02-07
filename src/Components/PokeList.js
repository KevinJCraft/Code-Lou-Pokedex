import React from 'react';
import { Link } from 'react-router-dom'
import Nav from './Nav'


const PokeList = (props) => {

    return (
        <>
            <ul className="poke-list">
                {props.pokeList.map(poke => (
                    <Link to={`/pokemon/${poke.name}`} key={poke.name}>
                        <li className="poke-card" to={`/${poke.name}`}>
                            <h3>{poke.name}</h3>
                        </li>
                    </Link>

                ))}
            </ul>
            <Nav
                handleNextPage={props.handleNextPage}
                handlePreviousPage={props.handlePreviousPage}

            />
        </>

    )

}

export default PokeList;