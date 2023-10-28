/* eslint-disable no-console */
import React from 'react';

import { SwiperCards } from '../SwiperCards';
import './hotPrices.scss';
import { ProductType } from '../../types/ProductType';

type Props = {
  visibleProducts: ProductType[];
};

export const HotPrices: React.FC<Props> = ({ visibleProducts }) => {
  return (
    <section className="hot-prices">
      <div className="container">
        <div className="wrapper">
          <div className="hot-prices__top">
            <h2 className="hot-prices__title">Hot prices</h2>

            <div className="hot-prices__arrows">
              <button
                className="hot-prices__arrow-left arrow arrow-left"
                type="button"
                aria-label="arrow-left"
              />
              <button
                className="hot-prices__arrow-right arrow arrow-right"
                type="button"
                aria-label="arrow-right"
              />
            </div>
          </div>
        </div>

        <SwiperCards
          arrowLeftClassName="hot-prices__arrow-left"
          arrowRightClassName="hot-prices__arrow-right"
          visibleProducts={visibleProducts}
        />
      </div>
    </section>
  );
};
