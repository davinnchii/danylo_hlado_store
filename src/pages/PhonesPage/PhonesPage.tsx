import React from 'react';
import homeIcon from '../../assets/icons/Home.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import './PhonesPage.scss';
import '../../components/productCard/productCard.scss';

import { SortSection } from '../../components/SortSection/SortSection';
import { ProductCard } from '../../components/productCard/productCard';

const product = {
  id: '1',
  category: 'phones',
  phoneId: 'apple-iphone-7-32gb-black',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  price: 375,
  screen: '4.7\' IPS',
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7/black/00.jpg',
};

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'alphabetically ', label: 'Alphabetically ' },
  { value: 'cheapest ', label: 'Cheapest ' },
];

const paginationOptions = [
  { value: '16', label: '16' },
  { value: '8', label: '8' },
  { value: '4', label: '4' },
];

export const PhonesPage: React.FC = () => {
  return (
    <>
      <div className="top-bar">
        <a
          href="/home"
          className="top-bar__link"
        >
          <img
            className="top-bar__icon"
            src={homeIcon}
            alt="home-icon"
          />
        </a>

        <img
          className="top-bar__icon"
          src={arrowRightIcon}
          alt="home-icon"
        />

        <a
          href="/phones"
          className="top-bar__link-text"
        >
          Phones
        </a>
      </div>

      <section className="section phones">
        <h1 className="phones__title">Mobile phones</h1>

        <p className="phones__amount">95 models</p>

        <article className="phones__sort sort">
          <SortSection
            defaultValue={sortOptions[0]}
            options={sortOptions}
            label="Sort by"
          />

          <SortSection
            defaultValue={paginationOptions[0]}
            options={paginationOptions}
            label="Items on page"
          />
        </article>

        <section className="catalog">
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
        </section>
      </section>
    </>
  );
};
