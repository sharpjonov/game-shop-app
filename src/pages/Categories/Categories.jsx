import React, { useEffect, useState } from 'react'
import "./categories.css"
import filterListData from '../../data/filterListData'
import GameCard from '../../components/GameCard/GameCard';
import CategoriesInput from '../../components/CategoriesInput/CategoriesInput';
import CategoriesFilters from '../../components/CategoriesFilters/CategoriesFilters';

const Categories = ({ games, reference }) => {
  const [data, setData] = useState(games);
  useEffect(() => {
    setData(games);
  }, [games]);
  console.log(data)
  const [filters, setFilters] = useState(filterListData)
  const handleFilterGames = (category) => {
    setFilters(
      filters.map((el) => {
        el.active = false;
        if (el.name === category) {
          el.active = true
        }
        return el;
      })
    );

    if (category === "All") {
      setData(games);
      return;
    }

    setData(games.filter((el) => el.category.toLowerCase() === category.toLowerCase()));
  }

  const [text, setText] = useState("");

  const handleSearchGames = (e) => {
    setData(games.filter((el) => el.title.toLowerCase().includes(e.target.value.toLowerCase())));
    setText(e.target.value);
  }

  return (
    <section id='categories' className='categories' ref={reference}>
      <div className='container-fluid mt-2'>
        <div className="row">
          <div className="col-lg-8 d-flex align-items-center justify-content-start">
            <CategoriesFilters filterGames={handleFilterGames} filters={filters} />
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-start">
              <CategoriesInput searchGames={handleSearchGames} />
          </div>
        </div>
        <div className="row">
          {data.map(game => (
            <GameCard key={game._id} el={game} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories