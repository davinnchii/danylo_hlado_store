/* eslint-disable max-len */
/* eslint-disable no-console */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import homeIcon from '../../assets/icons/Home.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import './PhonesPage.scss';
import '../../components/productCard/productCard.scss';

import { SortSection } from '../../components/SortSection/SortSection';
import { ProductCard } from '../../components/productCard/productCard';
import { getSpecificSorting } from '../../api/products';
import { ProductType } from '../../types/ProductType';
import { Loader } from '../../components/Loader';
import { getSectionTitle } from '../../utils/getSectionTitle';
import { Pagination } from '../../components/pagination/Pagination';

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
      .then((data) => {
        setCategoryProducts(data.rows);
        totalProducts.current.value = data.count;
      })
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
      <div className="top-bar">
        <a
          href="/home"
          className="top-bar__link"
        >
          <img
            className="top-bar__icon"
            src={homeIcon}
            alt="home-icon"
          />
        </a>

        <img
          className="top-bar__icon"
          src={arrowRightIcon}
          alt="home-icon"
        />

        <Link
          to="/"
          className="top-bar__link-text"
        >
          {normalizedCategoryLink}
        </Link>
      </div>

      <section className="section phones">
        <h1 className="phones__title">{getSectionTitle(category)}</h1>

        <p className="phones__amount">{`${visibleProducts.length} models`}</p>

        <article className="phones__sort sort">
          <SortSection
            defaultValue={sortOptions[0]}
            options={sortOptions}
            label="Sort by"
            onChange={handleChangePage}
          />

          <SortSection
            defaultValue={paginationOptions[0]}
            options={paginationOptions}
            label="Items on page"
            onChange={handleChangePage}
          />
        </article>

        {hasCategoryProductsLoaded ? (
          <Loader />
        ) : (
          <section className="catalog">
            {visibleProducts.map(product => (
              <ProductCard product={product} key={product.id} />
            ))}
          </section>
        )}
      </section>

      <Pagination
        total={totalProducts.current.value}
        currentPage={currentPage}
        onPageChange={handleChangePage}
      />
    </div>
  );
};
