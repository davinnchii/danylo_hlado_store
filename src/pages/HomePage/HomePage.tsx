/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

import { Main } from '../../components/Main';
import { Categories } from '../../components/Categories';
import { ProductsCarousel } from '../../components/ProductsCarousel';
import { getProductsWithDiscount, getProductsWithNewModels } from '../../api/products';
import { ProductType } from '../../types/ProductType';
import { Loader } from '../../components/Loader';
import { getPreparedProducts } from '../../utils/getPreparedProducts';
import './HomePage.scss';
import { MainLoader } from '../../components/MainLoader/MainLoader';

export const HomePage = () => {
  const [
    productsWithDiscount,
    setProductsWithDiscount,
  ] = useState<ProductType[]>([]);
  const [
    productsWithNewModels,
    setProductsWithNewModels,
  ] = useState<ProductType[]>([]);
  const [isDiscountLoading, setIsDiscountLoading] = useState(false);
  const [isNewModelsLoading, setIsNewModelsLoading] = useState(false);

  useEffect(() => {
    setIsDiscountLoading(true);
    setIsNewModelsLoading(true);

    getProductsWithDiscount()
      .then((data) => {
        setProductsWithDiscount(data);
      })
      .finally(() => setIsDiscountLoading(false));

    getProductsWithNewModels()
      .then((data) => {
        setProductsWithNewModels(data);
      })
      .finally(() => setIsNewModelsLoading(false));
  }, []);

  return (
    <div className="home-page">
      {isDiscountLoading && isNewModelsLoading ? (
        <>
          <Loader />
          <MainLoader />
        </>
      ) : (
        <>
          <Main />
          <ProductsCarousel
            title="Brand new models"
            visibleProducts={getPreparedProducts(productsWithNewModels)}
          />
          <Categories />
          <ProductsCarousel
            title="Hot prices"
            visibleProducts={getPreparedProducts(productsWithDiscount)}
          />
        </>
      )}
    </div>
  );
};
