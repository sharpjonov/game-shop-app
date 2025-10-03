import React from 'react'

const CategoriesFilters = ({filterGames,  filters}) => {
    return (
        <ul className="filters">
            {
                filters.map((el) => (
                    <li key={el._id} className={`${el.active ? 'active' : undefined}`} onClick={() => {filterGames(el.name) }}>{el.name}</li>
                ))
            }
        </ul>
    )
}

export default CategoriesFilters