import React, { useState } from 'react';

import './productCard.scss';
import iphoneImg from '../../assets/images/phoneImages/iphoneImg.png';
import addToFavorite from '../../assets/images/phoneImages/addToFavorite.svg';
import addedToFavorite from
  '../../assets/images/phoneImages/addedToFavorite.svg';

export const ProductCard = () => {
  const [isAdded, setAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    if (isAdded) {
      setAdded(false);
    } else {
      setAdded(true);
    }
  };

  const handleAddToFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  };

  return (
    <section className="card">
      <span className="card__image-block">
        <img
          src={iphoneImg}
          alt="Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)"
          className="card__image"
        />
      </span>

      <h3 className="card__title">
        Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)
      </h3>

      <span className="card__price">
        <p className="card__price-new">
          $999
        </p>
      </span>

      <div className="card__line" />

      <div className="card__info">
        <span className="card__info-block">
          <p className="card__info-item--gray">
            Screen
          </p>

          <p className="card__info-item">
            6.1” OLED
          </p>
        </span>

        <span className="card__info-block">
          <p className="card__info-item--gray">
            Capacity
          </p>

          <p className="card__info-item">
            128 GB
          </p>
        </span>

        <span className="card__info-block">
          <p className="card__info-item--gray">
            RAM
          </p>

          <p className="card__info-item">
            6 GB
          </p>
        </span>
      </div>

      <span className="card__buttons">
        <button
          type="button"
          onClick={handleAddToCart}
          className={`card__button ${isAdded ? 'added' : ''}`}
        >
          {isAdded ? 'Added' : 'Add to cart'}
        </button>

        <button
          type="button"
          onClick={handleAddToFavorite}
          className={`card__favorite ${isFavorite ? 'added' : ''}`}
        >
          <img
            src={isFavorite ? addedToFavorite : addToFavorite}
            alt="add to favorite"
            className="card__favorite--img"
          />
        </button>
      </span>
    </section>
  );
};
