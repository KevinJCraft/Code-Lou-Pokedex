import React from 'react';
import { useParams, useHistory } from 'react-router'


const NotFound = () => {

    const { message } = useParams()
    const history = useHistory()

    return (
        <div className="poke-card info">
            {message}
            <br></br>
            <button className="btn close" onClick={() => history.goBack()}>BACK</button>

        </div>
    )
}

export default NotFound;