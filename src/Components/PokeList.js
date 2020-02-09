import React from 'react';
import Nav from './Nav'
import axios from 'axios'
import { useHistory } from 'react-router'


const PokeList = (props) => {

    const history = useHistory()
    const handleClick = (name) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then(response => {
                history.push(`/pokemon/${response.data.name}`, response.data)
            })
            .catch(error => history.push(`/error/${error.message}`)
            )
    }


    return (
        <>
            <ul className="poke-list">
                {props.pokeList.map(poke => (

                    <li className="poke-card" onClick={() => handleClick(poke.name)} key={poke.name}>
                        <h3>{poke.name}</h3>
                    </li>


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