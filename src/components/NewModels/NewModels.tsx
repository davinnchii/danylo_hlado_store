import React from 'react';

import { SwiperCards } from '../SwiperCards';
import './newModels.scss';
import { ProductCard } from '../productCard/productCard';
import products from '../productCard/productData';

export const NewModels = () => {
  return (
    <section className="new-models">
      <div className="container">
        <div className="wrapper">
          <div className="new-models__top">
            <h2 className="new-models__title">
              Brand new models
            </h2>

            <div className="new-models__arrows">
              <button
                className="new-models__arrow-left arrow arrow-left"
                type="button"
                aria-label="arrow-left"
              />
              <button
                className="new-models__arrow-right arrow arrow-right"
                type="button"
                aria-label="arrow-right"
              />
            </div>
          </div>
        </div>

        <SwiperCards
          arrowLeftClassName="new-models__arrow-left"
          arrowRightClassName="new-models__arrow-right"
        >
          <>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        </SwiperCards>
      </div>
    </section>
  );
};
