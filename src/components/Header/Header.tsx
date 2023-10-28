/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import classnames from 'classnames';

import logo from '../../assets/images/logo.png';
import logoBlack from '../../assets/images/logo-black.png';
import './header.scss';

export const Header: React.FC = () => {
  const [searchParams, setSeacrhParams] = useSearchParams();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectMenuActive, setSelectMenuActive] = useState('home');

  const params = new URLSearchParams(searchParams);
  const category = params.get('category') || '';

  const handleMenuItemClick = (selectedItems: string) => {
    params.set('category', selectedItems);
    setSeacrhParams(params);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setSelectMenuActive(category);
  }, [category]);

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
            to="/home"
            className={classnames('header__menu-link', {
              'active-menu-link': selectMenuActive === '',
            })}
            onClick={() => handleMenuItemClick('')}
          >
            home
          </Link>

          <Link
            to="/products?category=phones"
            className={classnames('header__menu-link', {
              'active-menu-link': selectMenuActive === 'phones',
            })}
            onClick={() => handleMenuItemClick('phones')}
          >
            phones
          </Link>

          <Link
            to="/products?category=tablets"
            className={classnames('header__menu-link', {
              'active-menu-link': selectMenuActive === 'tablets',
            })}
            onClick={() => handleMenuItemClick('tablets')}
          >
            tablets
          </Link>

          <Link
            to="/products?category=accessories"
            className={classnames('header__menu-link', {
              'active-menu-link': selectMenuActive === 'accessories',
            })}
            onClick={() => handleMenuItemClick('accessories')}
          >
            accessories
          </Link>
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
