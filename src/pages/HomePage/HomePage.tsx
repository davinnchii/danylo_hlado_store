import React from 'react';

import { Main } from '../../components/Main';
import { NewModels } from '../../components/NewModels';
import { Categories } from '../../components/Categories';
import { HotPrices } from '../../components/HotPrices';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="home-page">
      <Main />
      <NewModels />
      <Categories />
      <HotPrices />
    </div>
  );
};
