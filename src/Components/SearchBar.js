import React, { useState } from 'react';

const SearchBar = (props) => {

    const [inputText, setInputText] = useState('')

    const handleChange = (event) => {
        let inputText = event.target.value
        setInputText(inputText)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.searchPoke(inputText)
        setInputText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                onChange={handleChange}
                value={inputText}
            ></input>
        </form>
    )
}

export default SearchBar;