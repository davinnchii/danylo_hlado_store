import React from 'react';

import { Main } from '../../components/Main';
import { NewModels } from '../../components/NewModels';
import { Categories } from '../../components/Categories';
import { HotPrices } from '../../components/HotPrices';

export const HomePage = () => {
  return (
    <>
      <Main />
      <NewModels title="Brand new models" />
      <Categories />
      <HotPrices />
    </>
  );
};
