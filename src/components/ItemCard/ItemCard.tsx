/* eslint-disable max-len */
import React, { useState } from 'react';
import './ItemCard.scss';
import { MainContent } from './MainContent';
import { AboutInfo } from './AboutInfo';
import { NewModels } from '../NewModels';

import phone from './temppublic/apple-iphone-11-128gb-black.json';
import rightArrow from '../../assets/icons/Chevron (Arrow Right).svg';

export const ItemCard = () => {
  const [selectedCapacity, setSelectedCapacity] = useState(phone.capacity);

  return (
    <article className="ItemCard">
      <div className="container">
        <div className="wrapper">
          <a href="/" className="ItemCard__back-link">
            <img className="ItemCard__back-arrow" src={rightArrow} alt="back icon" />
          </a>

          <MainContent
            phone={phone}
            phoneId={1}
            selectedCapacity={selectedCapacity}
            onSelectCapacity={setSelectedCapacity}
          />

          <AboutInfo phone={phone} selectedCapacity={selectedCapacity} />
        </div>
      </div>

      <NewModels title="You may also like" />
    </article>
  );
};
