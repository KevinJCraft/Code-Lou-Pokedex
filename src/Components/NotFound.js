import React from 'react';
import { useParams, useHistory } from 'react-router'


const NotFound = () => {

    const { message } = useParams()
    const history = useHistory()

    const handleClick = () => {
        history.goBack()
    }


    return (
        <div className="poke-card info">
            {message}
            <br></br>
            <button className="btn close" onClick={handleClick}>BACK</button>

        </div>
    )
}

export default NotFound;