import React from 'react';

import { SwiperCards } from '../SwiperCards';
import { ProductType } from '../../types/ProductType';
import './newModels.scss';

type Props = {
  title: string;
  visibleProducts: ProductType[];
};

export const NewModels: React.FC<Props> = ({
  title,
  visibleProducts,
}) => {
  return (
    <section className="new-models">
      <div className="container">
        <div className="wrapper">
          <div className="new-models__top">
            <h2 className="new-models__title">
              {title}
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
          visibleProducts={visibleProducts}
        />
      </div>
    </section>
  );
};
