/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

import { Main } from '../../components/Main';
import { Categories } from '../../components/Categories';
import { HotPrices } from '../../components/HotPrices';
import { getAllProducts } from '../../api/products';
import { ProductType } from '../../types/ProductType';
import { getPreparedProducts } from '../../utils/getPreparedProducts';
import { NewModels } from '../../components/NewModels';
import { Loader } from '../../components/Loader';
import './HomePage.scss';

export const HomePage = () => {
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getAllProducts()
      .then((data) => {
        setAllProducts(data.rows);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const newModelsVisibleProducts = getPreparedProducts('year', allProducts);
  const hotPricesVisibleProducts = getPreparedProducts('price', allProducts);

  return (
    <div className="home-page">
      <Main />

      {isLoading ? (
        <Loader />
      ) : (
        <NewModels
          title="Brand new models"
          visibleProducts={newModelsVisibleProducts}
        />
      )}
      <Categories />

      {isLoading
        ? (
          <Loader />
        ) : (
          <HotPrices visibleProducts={hotPricesVisibleProducts} />
        )}
    </div>
  );
};
