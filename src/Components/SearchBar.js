import React, { useState } from 'react';
import { useHistory } from 'react-router'

const SearchBar = () => {

    const [inputText, setInputText] = useState('')
    const history = useHistory()

    const handleChange = (event) => {
        let inputText = event.target.value
        setInputText(inputText)
    }

    function handleSubmit(event) {
        event.preventDefault()
        history.push(`/pokemon/${inputText}`)
        setInputText("")
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
        </form >
    )
}

export default SearchBar;