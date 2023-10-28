/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AboutInfo } from './AboutInfo';
import { MainContent } from './MainContent';
import { NewModels } from '../NewModels';

import phone from './temppublic/apple-iphone-11-128gb-black.json';
import { getProductById, getRecommendedProducts } from '../../api/products';
import { ProductType } from '../../types/ProductType';
import { Loader } from '../Loader';
import { getPreparedProducts } from '../../utils/getPreparedProducts';
import './ItemCard.scss';
import { ProductCartType } from '../../types';

export const ItemCard = () => {
  const [selectedCapacity, setSelectedCapacity] = useState(phone.capacity);
  const [recommendedProducts, setRecommendedProducts] = useState<ProductType[]>([]);
  const [hasRecommendedProductsLoaded, setHasRecommendedProductsLoaded] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<ProductCartType | null>(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProductById(id)
        .then((data) => {
          setSelectedProduct(data.details[0]);
          console.log(data.details);
        });
    }
  }, [id]);

  useEffect(() => {
    setHasRecommendedProductsLoaded(true);

    if (id) {
      getRecommendedProducts(id)
        .then((data) => {
          setRecommendedProducts(data);
        })
        .finally(() => setHasRecommendedProductsLoaded(false));
    }
  }, [id]);

  return (
    <article className="ItemCard">
      {selectedProduct && (
        <MainContent
          product={selectedProduct}
          phoneId={1}
          selectedCapacity={selectedCapacity}
          onSelectCapacity={setSelectedCapacity}
        />
      )}

      <AboutInfo phone={phone} selectedCapacity={selectedCapacity} />

      {hasRecommendedProductsLoaded ? (
        <Loader />
      ) : (
        <NewModels
          title="You may also like"
          visibleProducts={getPreparedProducts(recommendedProducts)}
        />
      )}
    </article>
  );
};
