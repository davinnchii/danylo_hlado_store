/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AboutInfo } from './AboutInfo';
import { MainContent } from './MainContent';
import { NewModels } from '../NewModels';

import { getProductById, getRecommendedProducts } from '../../api/products';
import { ProductType } from '../../types/ProductType';
import { getPreparedProducts } from '../../utils/getPreparedProducts';
import './ItemCard.scss';
import { ProductCartResponseType, ProductCartType } from '../../types';
import { Loader } from '../Loader';
import { CartsLoader } from '../CartsLoader/CartsLoader';

export const ItemCard = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductCartType | null>(null);
  const [availableVariants, setAvailableVariants] = useState<ProductCartResponseType | null>(null);
  const [recommendedProducts, setRecommendedProducts] = useState<ProductType[]>([]);
  const [hasRecommendedProductsLoaded, setHasRecommendedProductsLoaded] = useState(false);

  const { id } = useParams();
  const handleChangeCapacity = (newCapacity: string) => {
    const newProduct = availableVariants?.details.find(
      ({ capacity, color }) => capacity === newCapacity
        && color === selectedProduct?.color,
    ) || null;

    setSelectedProduct(newProduct);
  };

  const handleChangeColor = (newColor: string) => {
    const newProduct = availableVariants?.details.find(
      ({ color, capacity }) => color === newColor
        && capacity === selectedProduct?.capacity,
    ) || null;

    setSelectedProduct(newProduct);
  };

  useEffect(() => {
    if (id) {
      getProductById(id)
        .then((data) => {
          setAvailableVariants(data);
          setSelectedProduct(data.selectedProduct);
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
      {hasRecommendedProductsLoaded && (
        <Loader />
      )}

      {(selectedProduct) && (
        <>
          <MainContent
            product={selectedProduct}
            phoneId={1}
            selectedCapacity={selectedProduct.capacity}
            onSelectCapacity={handleChangeCapacity}
            onSelectColor={handleChangeColor}
            hasLoaded={hasRecommendedProductsLoaded}
          />
          <AboutInfo
            phone={selectedProduct}
            selectedCapacity={selectedProduct.capacity}
            hasLoaded={hasRecommendedProductsLoaded}
          />
        </>
      )}

      {hasRecommendedProductsLoaded ? (
        <div className="container">
          <CartsLoader />
        </div>
      ) : (
        <NewModels
          title="You may also like"
          visibleProducts={getPreparedProducts(recommendedProducts)}
        />
      )}
    </article>
  );
};
