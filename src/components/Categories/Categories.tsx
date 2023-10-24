import React from 'react';

import mobile_phones from '../../assets/images/category/mobile-phones.png';
import tablets from '../../assets/images/category/tablets.png';
import accessories from '../../assets/images/category/accessories.png';

import './categories.scss';

export const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="categories__title">Shop by category</h2>

        <ul className="categories__list">
          <li className="categories__item">
            <img
              className="categories__item-picture"
              src={mobile_phones}
              alt="mobile-phones"
            />

            <h5 className="categories__item-title">Mobile phones</h5>
            <p className="categories__item-description">95 models</p>
          </li>

          <li className="categories__item">
            <img
              className="categories__item-picture"
              src={tablets}
              alt="tablets"
            />

            <h5 className="categories__item-title">Tablets</h5>
            <p className="categories__item-description">24 models</p>
          </li>

          <li className="categories__item">
            <img
              className="categories__item-picture"
              src={accessories}
              alt="accessories"
            />

            <h5 className="categories__item-title">Accessories</h5>
            <p className="categories__item-description">100 models</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
