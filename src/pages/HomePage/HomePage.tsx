/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

import { Main } from '../../components/Main';
import { Categories } from '../../components/Categories';
import { HotPrices } from '../../components/HotPrices';
import { NewModels } from '../../components/NewModels';
import { getProductsWithDiscount, getProductsWithNewModels } from '../../api/products';
import { ProductType } from '../../types/ProductType';
import { Loader } from '../../components/Loader';
import './HomePage.scss';
import { getPreparedProducts } from '../../utils/getPreparedProducts';

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
      <Main />

      {isNewModelsLoading ? (
        <Loader />
      ) : (
        <NewModels
          title="Brand new models"
          visibleProducts={getPreparedProducts(productsWithNewModels)}
        />
      )}

      <Categories />

      {isDiscountLoading ? (
        <Loader />
      ) : (
        <HotPrices visibleProducts={getPreparedProducts(productsWithDiscount)} />
      )}
    </div>
  );
};
