/* eslint-disable max-len */
import React, { useState } from 'react';
import './ItemCard.scss';
import { MainContent } from './MainContent';
import { AboutInfo } from './AboutInfo';
import { NewModels } from '../NewModels';

import phone from './temppublic/apple-iphone-11-128gb-black.json';

export const ItemCard = () => {
  const [selectedCapacity, setSelectedCapacity] = useState(phone.capacity);

  return (
    <article className="ItemCard">
      <MainContent
        phone={phone}
        phoneId={1}
        selectedCapacity={selectedCapacity}
        onSelectCapacity={setSelectedCapacity}
      />

      <AboutInfo phone={phone} selectedCapacity={selectedCapacity} />

      <NewModels title="You may also like" />
    </article>
  );
};
