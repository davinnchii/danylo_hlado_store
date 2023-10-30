import React from 'react';

import { Link } from 'react-router-dom';
import './productCard.scss';
import { ProductType } from '../../types/ProductType';
import { getImageUrl } from '../../utils/getImageUrl';
import { Button } from '../Button/Button';
import { HeartIcon } from '../HeartIcon';

type ProductCardProps = {
  product: ProductType;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <section className="card">
      <Link to={`/products/${product.id}`} onClick={handleScroll}>
        <span className="card__image-block">
          <img
            src={getImageUrl(product.image)}
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
      </Link>

      <span className="card__buttons">
        <Button
          content="Add to cart"
        />

        <HeartIcon />
      </span>
    </section>
  );
};
