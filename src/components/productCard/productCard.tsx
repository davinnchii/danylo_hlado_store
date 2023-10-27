import React, { useState } from 'react';

import './productCard.scss';
import iphoneImg from '../../assets/images/phoneImages/iphoneImg.png';
import addToFavorite from '../../assets/images/phoneImages/addToFavorite.svg';
import addedToFavorite from
  '../../assets/images/phoneImages/addedToFavorite.svg';
import { ProductType } from './types/productTypes';

type ProductCardProps = {
  product: ProductType;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
          src={iphoneImg} // later here will be {product.image}
          alt={product.name}
          className="card__image"
        />
      </span>

      <h3 className="card__title">
        {product.name}
      </h3>

      <span className="card__price">
        <p className="card__price-new">
          $
          {product.price}
        </p>

        {product.fullPrice && (
          <p className="card__price-old">
            $
            {product.fullPrice}
          </p>
        )}
      </span>

      <div className="card__line" />

      <div className="card__info">
        <span className="card__info-block">
          <p className="card__info-item--gray">
            Screen
          </p>

          <p className="card__info-item">
            {product.screen}
          </p>
        </span>

        <span className="card__info-block">
          <p className="card__info-item--gray">
            Capacity
          </p>

          <p className="card__info-item">
            {product.capacity}
          </p>
        </span>

        <span className="card__info-block">
          <p className="card__info-item--gray">
            RAM
          </p>

          <p className="card__info-item">
            {product.ram}
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
