import React from 'react';

const Nav = ({ handlePreviousPage, handleNextPage }) => {

    return (
        <>
            <button onClick={handlePreviousPage} id="previous" className="btn">
                Previous
                    </button>
            <button onClick={handleNextPage} id="next" className="btn">
                Next
                    </button>
        </>
    )
}

export default Nav;