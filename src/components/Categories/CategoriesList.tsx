import React from 'react';
import { Link } from 'react-router-dom';
import {
  categories,
  limitDefault,
  offsetDefault,
  sortDefault,
} from '../../utils/constant';
import { normalizedMenuLink } from '../../utils/getNormalizedMenuLink';

export const CategoriesList = () => {
  return (
    <ul className="categories__list">
      {categories.map(category => {
        const {
          id, title, description, imgSrc,
        } = category;

        return (
          <li className="categories__item" key={id}>
            <Link to={normalizedMenuLink(
              id, limitDefault, offsetDefault, sortDefault,
            )}
            >
              <div className="categories__item-picture-box">
                <img
                  className="categories__item-picture"
                  src={imgSrc}
                  alt="mobile-phones"
                />
              </div>

              <h5 className="categories__item-title">{title}</h5>
              <p className="categories__item-description">
                {description}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
