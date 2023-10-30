/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useParams } from 'react-router-dom';
import { AboutInfo } from './AboutInfo';
import { MainContent } from './MainContent';
import { ProductsCarousel } from '../ProductsCarousel';

import { getProductById, getRecommendedProducts } from '../../api/products';
import { ProductType } from '../../types/ProductType';
import { getPreparedProducts } from '../../utils/getPreparedProducts';
import './ItemCard.scss';
import { ProductCartResponseType, ProductCartType } from '../../types';
import { Loader } from '../Loader';
import { CartsLoader } from '../CartsLoader/CartsLoader';
import { ItemCardLoader } from '../ItemCardLoader/ItemCardLoader';

export const ItemCard = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductCartType | null>(null);
  const [availableVariants, setAvailableVariants] = useState<ProductCartResponseType | null>(null);
  const [recommendedProducts, setRecommendedProducts] = useState<ProductType[]>([]);
  const [productInfo, setProductInfo] = useState<ProductType | null>(null);
  const [hasDataLoaded, setDataHasLoaded] = useState(false);

  const { id } = useParams();
  const handleChangeCapacity = useCallback((newCapacity: string) => {
    const newProduct = availableVariants?.details.find(
      ({ capacity, color }) => capacity === newCapacity
        && color === selectedProduct?.color,
    ) || null;

    setSelectedProduct(newProduct);
  }, [availableVariants, selectedProduct]);

  const handleChangeColor = useCallback((newColor: string) => {
    const newProduct = availableVariants?.details.find(
      ({ color, capacity }) => color === newColor
        && capacity === selectedProduct?.capacity,
    ) || null;

    setSelectedProduct(newProduct);
  }, [availableVariants, selectedProduct]);

  useEffect(() => {
    setDataHasLoaded(true);

    if (id) {
      Promise.all([
        getProductById(id),
        getRecommendedProducts(id),
      ])
        .then(([selectedProductData, recommendedProductData]) => {
          setAvailableVariants(selectedProductData);
          setSelectedProduct(selectedProductData.selectedProduct);
          setProductInfo(selectedProductData.product);
          setRecommendedProducts(recommendedProductData);
        })
        .finally(() => {
          setDataHasLoaded(false);
        });
    }
  }, [id]);

  return (
    <article className="ItemCard">
      {hasDataLoaded && (
        <>
          <Loader />
          <ItemCardLoader />
          <div className="container">
            <CartsLoader />
          </div>
        </>
      )}

      {(selectedProduct && productInfo) && (
        <>
          <MainContent
            product={selectedProduct}
            phoneId={+productInfo.id}
            selectedCapacity={selectedProduct.capacity}
            onSelectCapacity={handleChangeCapacity}
            onSelectColor={handleChangeColor}
            productInfo={productInfo}
          />

          <AboutInfo
            phone={selectedProduct}
            selectedCapacity={selectedProduct.capacity}
          />

          <ProductsCarousel
            title="You may also like"
            visibleProducts={getPreparedProducts(recommendedProducts)}
          />
        </>
      )}
    </article>
  );
};
