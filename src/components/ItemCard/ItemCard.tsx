/* eslint-disable max-len */
import React from 'react';
import './ItemCard.scss';
import { MainContent } from './MainContent';

import phone from './temppublic/apple-iphone-11-128gb-black.json';
import rightArrow from '../../assets/icons/Chevron (Arrow Right).svg';

export const ItemCard = () => {
  return (
    <div className="ItemCard">
      <a href="/" className="ItemCard__back-link">
        <img className="ItemCard__back-arrow" src={rightArrow} alt="back icon" />
      </a>

      <MainContent phone={phone} phoneId={1} />
    </div>
  );
};
