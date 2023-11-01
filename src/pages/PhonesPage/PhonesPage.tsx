/* eslint-disable max-len */
/* eslint-disable no-console */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import Skeleton from 'react-loading-skeleton';
import { SelectChangeEvent } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { SortSection } from '../../components/SortSection/SortSection';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { getSpecificSorting } from '../../api/products';
import { ProductResponseType, ProductType } from '../../types';
import { getSectionTitle } from '../../utils/getSectionTitle';
import { Pagination } from '../../components/Pagination/Pagination';
import { CartsLoader } from '../../components/CartsLoader/CartsLoader';
import { Loader } from '../../components/Loader';
import { ArrowsLoader } from '../../components/ArrowsLoader/ArrowsLoader';
import '../../components/ProductCard/ProductCard.scss';
import { BreadcrumbsNav } from '../../components/Breadcrumbs/Breadcrumbs';
import './PhonesPage.scss';
import { ErrorPopUp } from '../../components/ErrorPopUp';
import { normalizedMenuLink } from '../../utils/getNormalizedMenuLink';

export const PhonesPage: React.FC = () => {
  const [categoryProducts, setCategoryProducts] = useState<ProductType[]>([]);
  const [hasCategoryProductsLoaded, setHasCategoryProductsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [updateRequest, setUpdateRequest] = useState(new Date());

  const totalProducts = useRef({ value: 0 });

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('category') || '';
  const sort = searchParams.get('sortBy') || 'newest';
  const limit = searchParams.get('limit') || '16';
  const offset = searchParams.get('offset') || '0';
  const query = searchParams.get('query') || '';

  useEffect(() => {
    setHasCategoryProductsLoaded(true);
    setIsError(false);

    getSpecificSorting(category, sort, Number(limit), Number(offset), query)
      .then((data: ProductResponseType) => {
        setCategoryProducts(data.rows);
        totalProducts.current.value = data.count;
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setHasCategoryProductsLoaded(false);
      });
  }, [category, sort, limit, offset, updateRequest, query]);

  const handleChangePage = useCallback((page: number) => {
    const params = new URLSearchParams(searchParams);

    setCurrentPage(page);
    params.set('offset', (Number(limit) * (page - 1)).toString());
    params.set('page', page.toString());
    setSearchParams(params);
  }, [limit, sort]);

  const handleChangeParams = useCallback((event: SelectChangeEvent) => {
    const params = new URLSearchParams(searchParams);
    const normalizedOption = event.target.value.replace(/[^a-zA-Z]/g, '');

    handleChangePage(1);

    if (Number.isNaN(+event.target.value)) {
      params.set('sortBy', normalizedOption);
      setSearchParams(params);

      return;
    }

    params.set('limit', event.target.value);
    setSearchParams(params);
  }, [sort, limit]);

  const getPreparedCategoryProducts = (selectedCategory: ProductType[]) => {
    return selectedCategory;
  };

  const visibleProducts = getPreparedCategoryProducts(categoryProducts);
  const normalizedCategoryLink = `${category[0].toUpperCase()}${category.slice(1)}`;

  return (
    <div className="container">
      <ErrorPopUp open={isError} onUpdatePage={setUpdateRequest} />

      <BreadcrumbsNav
        className="top-bar"
        links={[
          <Link
            to={normalizedMenuLink(category, Number(limit), Number(offset), sort)}
            key={normalizedCategoryLink}
            className="top-bar__link-text top-bar__link-text--last"
          >
            {normalizedCategoryLink}
          </Link>,
        ]}
      />
      {hasCategoryProductsLoaded && (
        <Loader />
      )}

      <section className="section phones">
        <h1 className="phones__title">
          {hasCategoryProductsLoaded
            ? <Skeleton />
            : getSectionTitle(category)}
        </h1>

        <p className="phones__amount">
          {hasCategoryProductsLoaded
            ? <Skeleton />
            : `${totalProducts.current.value} models`}
        </p>

        <article className="phones__sort sort">
          {hasCategoryProductsLoaded
            ? <Skeleton />
            : (
              <SortSection
                value={sort}
                onChange={handleChangeParams}
                options={['newest', 'alphabetically', 'cheapest']}
                label="Sort by"
              />
            )}

          {hasCategoryProductsLoaded
            ? <Skeleton />
            : (
              <SortSection
                options={['16', '8', '4']}
                value={limit}
                onChange={handleChangeParams}
                label="Items on page"
              />
            )}
        </article>

        {hasCategoryProductsLoaded
          ? <CartsLoader />
          : (
            <section className="catalog">
              {visibleProducts.map(product => (
                <ProductCard product={product} key={product.id} />
              ))}
            </section>
          )}

      </section>

      {hasCategoryProductsLoaded
        ? <ArrowsLoader />
        : (
          <Pagination
            total={totalProducts.current.value}
            currentPage={currentPage}
            onPageChange={handleChangePage}
          />
        )}
    </div>
  );
};
