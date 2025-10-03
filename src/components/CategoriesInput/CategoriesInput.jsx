import React from 'react'

const CategoriesInput = ({searchGames}) => {
    return (
        <div className="search">
            <i className="bi bi-search"></i>
            <input type="text" name="search" placeholder='Search...' className='' onChange={searchGames} />
        </div>
    )
}

export default CategoriesInput