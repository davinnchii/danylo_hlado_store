import React from 'react';

import mobile_phones from '../../assets/images/category/mobile-phones.png';
import tablets from '../../assets/images/category/tablets.png';
import accessories from '../../assets/images/category/accessories.png';

import './categories.scss';

export const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="wrapper">
          <h2 className="categories__title">Shop by category</h2>

          <ul className="categories__list">
            <li className="categories__item">
              <div className="categories__item-picture-box">
                <img
                  className="categories__item-picture"
                  src={mobile_phones}
                  alt="mobile-phones"
                />
              </div>

              <h5 className="categories__item-title">Mobile phones</h5>
              <p className="categories__item-description">95 models</p>
            </li>

            <li className="categories__item">
              <div className="categories__item-picture-box">
                <img
                  className="categories__item-picture"
                  src={tablets}
                  alt="tablets"
                />
              </div>

              <h5 className="categories__item-title">Tablets</h5>
              <p className="categories__item-description">24 models</p>
            </li>

            <li className="categories__item">
              <div className="categories__item-picture-box">
                <img
                  className="categories__item-picture"
                  src={accessories}
                  alt="accessories"
                />
              </div>

              <h5 className="categories__item-title">Accessories</h5>
              <p className="categories__item-description">100 models</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
