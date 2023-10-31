/* eslint-disable max-len */
/* eslint-disable no-console */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import Skeleton from 'react-loading-skeleton';
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
import { realoadPage } from '../../utils/reloadPage';

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'alphabetically ', label: 'Alphabetically ' },
  { value: 'cheapest ', label: 'Cheapest ' },
];

const paginationOptions = [
  { value: '16', label: '16' },
  { value: '8', label: '8' },
  { value: '4', label: '4' },
];

export const PhonesPage: React.FC = () => {
  const [categoryProducts, setCategoryProducts] = useState<ProductType[]>([]);
  const [hasCategoryProductsLoaded, setHasCategoryProductsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const sort = searchParams.get('sortBy') || 'newest';
  const limit = searchParams.get('limit') || '16';
  const offset = searchParams.get('offset') || '0';
  const totalProducts = useRef({ value: 0 });

  useEffect(() => {
    setHasCategoryProductsLoaded(true);

    getSpecificSorting(category, sort, Number(limit), Number(offset))
      .then((data: ProductResponseType) => {
        setCategoryProducts(data.rows);
        totalProducts.current.value = data.count;
      })
      .catch(realoadPage)
      .finally(() => setHasCategoryProductsLoaded(false));
  }, [category, sort, limit, offset]);

  const handleChangePage = useCallback((page: number) => {
    setCurrentPage(page);
    searchParams.set('offset', (Number(limit) * page).toString());
  }, [searchParams, limit]);

  const getPreparedCategoryProducts = (selectedCategory: ProductType[]) => {
    return selectedCategory;
  };

  const visibleProducts = getPreparedCategoryProducts(categoryProducts);
  const normalizedCategoryLink = `${category[0].toUpperCase()}${category.slice(1)}`;

  return (
    <div className="container">
      <BreadcrumbsNav
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
                defaultValue={sortOptions[0]}
                options={sortOptions}
                label="Sort by"
                onChange={handleChangePage}
              />
            )}

          {hasCategoryProductsLoaded
            ? <Skeleton />
            : (
              <SortSection
                defaultValue={paginationOptions[0]}
                options={paginationOptions}
                label="Items on page"
                onChange={handleChangePage}
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
