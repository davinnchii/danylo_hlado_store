import React from 'react';

import './hotPrices.scss';
import { SwiperCards } from '../SwiperCards';

export const HotPrices = () => {
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
        />
      </div>
    </section>
  );
};
