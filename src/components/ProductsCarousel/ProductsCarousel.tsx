import React from 'react';

import { SwiperCards } from '../SwiperCards';
import { ProductType } from '../../Types/ProductType';
import './productsCarousel.scss';

type Props = {
  title: string;
  visibleProducts: ProductType[];
};

export const ProductsCarousel: React.FC<Props> = ({
  title,
  visibleProducts,
}) => {
  return (
    <section className="products-carousel">
      <div className="container">
        <div className="wrapper">
          <div className="products-carousel__top">
            <h2 className="products-carousel__title">
              {title}
            </h2>

            <div className="products-carousel__arrows">
              <div className="products-carousel__arrows">
                <button
                  className="products-carousel__arrow-left arrow arrow-left"
                  type="button"
                  aria-label="arrow-left"
                />
                <button
                  className="products-carousel__arrow-right arrow arrow-right"
                  type="button"
                  aria-label="arrow-right"
                />
              </div>
            </div>
          </div>

          <SwiperCards
            arrowLeftClassName="products-carousel__arrow-left"
            arrowRightClassName="products-carousel__arrow-right"
            visibleProducts={visibleProducts}
          />
        </div>
      </div>
    </section>
  );
};
