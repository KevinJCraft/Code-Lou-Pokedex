import React, { useState } from 'react';

const SearchBar = (props) => {

    const [inputText, setInputText] = useState('')

    const handleChange = (event) => {
        let inputText = event.target.value
        setInputText(inputText)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                onChange={handleChange}
                value={inputText}
                autoFocus
            ></input>
        </form>
    )
}

export default SearchBar;