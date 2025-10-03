import React, { useContext } from "react";
import "./gameCard.css";
import GameRating from "../GameRating/GameRating";
import { AppContext } from "../../App";

const GameCard = ({ el }) => {
  const { bag, setBag, library, setLibrary } = useContext(AppContext);

  const handleAddtoLibrary = (game) => {
    setLibrary([...library, game]);
  };

  const handleRemoveFromLibrary = (game) => {
    setLibrary(library.filter((item) => item._id !== game._id));
  };

  const handleAddToBag = (game) => {
    if(bag.includes(game)) return;
    setBag([...bag, game]);
  }

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 ">
      <div className="gameCard">
        <img src={el.img} alt={el.title} className="img-fluid" />
        <a
          className={`like ${library.includes(el) ? "active" : ""}`}
          href="#"
          onClick={
            library.includes(el)
              ? () => handleRemoveFromLibrary(el)
              : () => handleAddtoLibrary(el)
          }
        >
          <i className="bi bi-heart-fill"></i>
        </a>
        <div className="gameFeature">
          <span className="gameType">{el.level}</span>
          <GameRating rating={el.rating} />
        </div>
        <div className="gameTitle mt-4 mb-3">{el.title}</div>
        <div className="gamePrice">
          {el.discount != 0 && (
            <>
              <span className="discount">
                <i>{el.discount * 100}%</i>
              </span>
              <span className="prevPrice">${el.price.toFixed(2)}</span>
            </>
          )}

          <span className="currentPrice">
            ${((1 - el.discount) * el.price).toFixed(2)}
          </span>
        </div>
        <a href="#" className="addBag" onClick={() => handleAddToBag(el)}>
          <i className="bi bi-bag-plus-fill"></i>
        </a>
      </div>
    </div>
  );
};

export default GameCard;
