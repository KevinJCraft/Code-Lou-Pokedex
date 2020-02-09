import React, { useState } from 'react';
import { useHistory } from 'react-router'
import axios from 'axios'

const SearchBar = () => {

    const [inputText, setInputText] = useState('')
    const [error, setError] = useState({ class: 'error-message-slide-up', message: '' })
    const history = useHistory()

    const handleChange = (event) => {
        if (event.target.value.length <= 20) {
            let inputText = event.target.value
            setInputText(inputText)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        inputText && fetchPokemon()
        setInputText("")
    }

    const fetchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${inputText}/`)
            .then(response => {
                history.push(`/pokemon/${response.data.name}`, response.data)
            })
            .catch(err => {
                setError({ class: 'error-message-slide-down', message: "Pokemon not found" })
                setTimeout(() => setError({ class: 'error-message-slide-up', message: '' }), 3000)
            })

    }

    return (
        < form onSubmit={handleSubmit} >

            <input
                className='search-bar'
                type="text"
                placeholder="Search..."
                onChange={handleChange}
                value={inputText}
                autoFocus
            ></input>
            <div className={error.class} >{error.message}</div>
        </form >
    )
}

export default SearchBar;