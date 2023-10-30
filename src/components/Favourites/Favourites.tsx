import React from 'react';
import { ProductCard } from '../productCard/productCard';
import './main.scss';

const product = {
  id: 151,
  category: 'accessories',
  itemId: 'apple-watch-se-40mm-gold',
  name: 'Apple Watch SE 40mm Gold',
  fullPrice: 279,
  price: 259,
  screen: '1.57\' OLED',
  capacity: '40mm',
  color: 'gold',
  ram: '1GB',
  year: 2020,
  image: 'img/accessories/apple-watch-se/gold/00.webp',
};

export const Favourites = () => {
  return (
    <div className="favourites wrapper container">
      <div className="favourites__title">Favourites</div>
      <div className="favourites__items">5 items</div>
      <div className="favourites__products">
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
    </div>
  );
};
