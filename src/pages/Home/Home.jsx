import React from 'react'
import "./home.css"
import GameSwiper from '../../components/GameSwiper/GameSwiper'
import GameCard from '../../components/GameCard/GameCard'
const Home = ({ games, reference }) => {
  return (
    <section id='home' className='home active' ref={reference}>
      <div className='container-fluid'>
        <div className='row'>
          <GameSwiper games={games} />
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-lg-6">
            <h2 className="sectionTitle">Games on promotion</h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-item-center">
            <a href="#" className='viewMore'>
              View More Games <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="row">
          {
            games.slice(0,4).map((el) => (
              <GameCard key={el._id} el={el} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Home