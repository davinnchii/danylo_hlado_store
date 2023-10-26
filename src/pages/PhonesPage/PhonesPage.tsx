import React from 'react';
import homeIcon from '../../assets/icons/Home.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import './PhonesPage.scss';
import '../../components/productCard/productCard.scss';

import { SortSection } from '../../components/SortSection/SortSection';
import { ProductCard } from '../../components/productCard/productCard';

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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </section>
    </>
  );
};
