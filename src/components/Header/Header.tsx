/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import classnames from 'classnames';

import logo from '../../assets/images/logo.png';
import logoBlack from '../../assets/images/logo-black.png';
import './header.scss';
import { limitDefault, offsetDefault, sortDefault } from '../../utils/constant';

enum CategoryType {
  Phones = 'phones',
  Tablets = 'tablets',
  Accessories = 'accessories',
}

export const Header: React.FC = () => {
  const [searchParams, setSeacrhParams] = useSearchParams();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectMenuActive, setSelectMenuActive] = useState<string>('');

  const params = new URLSearchParams(searchParams);
  const category = params.get('category') || '';
  const sort = params.get('sortBy') || sortDefault;

  const handleMenuItemClick = (selectedItems: string) => {
    params.set('category', selectedItems);
    setSeacrhParams(params);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setSelectMenuActive(category);
  }, [category]);

  const normalizedMenuLink = (
    categoryItem: string,
    limit: number,
    offset: number,
    sortField: string,
  ) => {
    return `/products?category=${categoryItem}&limit=${limit}&offset=${offset}&sortBy=${sortField}`;
  };

  return (
    <header className="header">
      <div className="header__left">
        <Link
          className="header__logo"
          to="/"
          onClick={() => handleMenuItemClick('')}
        >
          <img
            className="header__logo-img"
            src={isMenuOpen ? logo : logoBlack}
            alt="logo"
          />
        </Link>

        <nav className={`header__menu ${isMenuOpen ? 'active-menu' : ''}`}>
          <Link
            to="/"
            className={classnames('header__menu-link', {
              'active-menu-link': selectMenuActive === '',
            })}
            onClick={() => handleMenuItemClick('')}
          >
            home
          </Link>

          {Object.values(CategoryType).map(item => (
            <Link
              key={item}
              to={normalizedMenuLink(item, limitDefault, offsetDefault, sort)}
              className={classnames('header__menu-link', {
                'active-menu-link': selectMenuActive === item,
              })}
              onClick={() => handleMenuItemClick(item)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      <div className="header__right">
        <div className="header__icons">
          <i
            className={`icon icon--${!isMenuOpen ? 'menu' : 'close'}`}
            onClick={() => setIsMenuOpen(prev => !prev)}
          />

          <Link to="/favourites" className="icon icon--favourites__link">
            <i className="icon--favourites" />
          </Link>

          <Link to="/shopping-bag" className="icon icon--shopping-bag__link">
            <i className="icon--shopping-bag" />
          </Link>
        </div>
      </div>
    </header>
  );
};
