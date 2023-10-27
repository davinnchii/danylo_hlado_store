import React from 'react';

import mobilePhones from '../../assets/images/category/mobile-phones.png';
import tablets from '../../assets/images/category/tablets.png';
import accessories from '../../assets/images/category/accessories.png';

const categories = [
  {
    id: 1,
    title: 'Mobile phones',
    description: '95 models',
    imgSrc: mobilePhones,
  },
  {
    id: 2,
    title: 'Tablets',
    description: '24 models',
    imgSrc: tablets,
  },
  {
    id: 3,
    title: 'Accessories',
    description: '100 models',
    imgSrc: accessories,
  },
];

export const CategoriesList = () => {
  return (
    <ul className="categories__list">
      {categories.map(category => (
        <li className="categories__item" key={category.id}>
          <div className="categories__item-picture-box">
            <img
              className="categories__item-picture"
              src={category.imgSrc}
              alt="mobile-phones"
            />
          </div>

          <h5 className="categories__item-title">{category.title}</h5>
          <p className="categories__item-description">
            {category.description}
          </p>
        </li>
      ))}
    </ul>
  );
};
