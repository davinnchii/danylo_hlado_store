import React from 'react';

import './hotPrices.scss';

export const HotPrices = () => {
  return (
    <section className="hot-prices">
      <div className="container">
        <div className="hot-prices__top">
          <h2 className="hot-prices__title">Hot prices</h2>

          <div className="hot-prices__arrows">
            <button
              className="hot-prices__arrow arrow arrow-left"
              type="button"
              aria-label="arrow-left"
            />
            <button
              className="hot-prices__arrow arrow arrow-right"
              type="button"
              aria-label="arrow-right"
            />
          </div>
        </div>

        <ul className="hot-prices__list">
          {/* Card Items */}
        </ul>
      </div>
    </section>
  );
};
