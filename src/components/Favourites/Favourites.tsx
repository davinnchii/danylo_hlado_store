import React from 'react';
import { ProductCard } from '../productCard/productCard';
import './main.scss';

export const Favourites = () => {
  return (
    <div className="favourites">
      <div className="favourites__title">Favourites</div>
      <div className="favourites__items">5 items</div>
      <div className="favourites__phones">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
