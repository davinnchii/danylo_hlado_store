/* eslint-disable max-len */
/* eslint-disable no-console */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import Skeleton from 'react-loading-skeleton';
import { SelectChangeEvent } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { SortSection } from '../../components/SortSection/SortSection';
import { ProductCard } from '../../components/productCard/productCard';
import { getSpecificSorting } from '../../api/products';
import { ProductResponseType, ProductType } from '../../types';
import { getSectionTitle } from '../../utils/getSectionTitle';
import { Pagination } from '../../components/pagination/Pagination';
import { CartsLoader } from '../../components/CartsLoader/CartsLoader';
import { Loader } from '../../components/Loader';
import { ArrowsLoader } from '../../components/ArrowsLoader/ArrowsLoader';
import '../../components/productCard/productCard.scss';
import { BreadcrumbsNav } from '../../components/Breadcrumbs/Breadcrumbs';
import './PhonesPage.scss';
import { ErrorPopUp } from '../../components/ErrorPopUp';

export const PhonesPage: React.FC = () => {
  const [categoryProducts, setCategoryProducts] = useState<ProductType[]>([]);
  const [hasCategoryProductsLoaded, setHasCategoryProductsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const sort = searchParams.get('sortBy') || 'newest';
  const limit = searchParams.get('limit') || '16';
  const offset = searchParams.get('offset') || '0';
  const totalProducts = useRef({ value: 0 });
  const [isError, setIserror] = useState(false);
  const [updateRequest, setUpdateRequest] = useState(new Date());

  useEffect(() => {
    setHasCategoryProductsLoaded(true);
    setIserror(false);

    getSpecificSorting(category, sort, Number(limit), Number(offset))
      .then((data: ProductResponseType) => {
        setCategoryProducts(data.rows);
        totalProducts.current.value = data.count;
      })
      .catch((error) => {
        setIserror(true);
        setTimeout(() => {
          setUpdateRequest(new Date());
        }, 3000);
        // eslint-disable-next-line no-console
        console.error(error);
      })
      .finally(() => setHasCategoryProductsLoaded(false));
  }, [category, sort, limit, offset, updateRequest]);

  const handleChangePage = useCallback((page: number) => {
    setCurrentPage(page);
    searchParams.set('offset', (Number(limit) * page).toString());
  }, [searchParams, limit]);

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
      <ErrorPopUp open={isError} />

      <BreadcrumbsNav
        className="top-bar"
        links={[
          <Link
            to={`?category=${category}&limit=${limit}&offset=${offset}&sortBy=${sort}`}
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
