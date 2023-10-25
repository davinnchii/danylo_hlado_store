import React from 'react';

import './productCard.scss';
import iphoneImg from '../../assets/images/phoneImages/iphoneImg.png';
import addToFavorite from '../../assets/images/phoneImages/addToFavorite.png';

export const ProductCard = () => {
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
        <a
          href="/link"
          className="card__button"
        >
          Add to cart
        </a>

        <a
          href="/link"
          className="card__favorite"
        >
          <img
            src={addToFavorite}
            alt="add to favorite"
            className="card__favorite--img"
          />
        </a>
      </span>
    </section>
  );
};
