/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import classnames from 'classnames';
import { Fade } from 'react-awesome-reveal';

import logo from '../../assets/images/logo.png';
import logoBlack from '../../assets/images/logo-black.png';
import './header.scss';
import { limitDefault, offsetDefault, sortDefault } from '../../utils/constant';
import { normalizedMenuLink } from '../../utils/getNormalizedMenuLink';
import { NavigationMobile } from '../NavigationMobile';
import { CategoryType } from '../../types/CategoryType';
import { SearchBar } from '../SearchBar/SearchBar';
import { useFavourite } from '../../context/FavouriteContext';
import { useCart } from '../../context/CartContext';
import { CounterIcon } from '../CounterIcon/CounterIcon';

export const Header: React.FC = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const { favourite } = useFavourite();
  const { cart } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [themeToggle, setThemeToggle] = useState(false);
  const [selectActiveLink, setSelectActiveLink] = useState<string>('');

  const params = new URLSearchParams(searchParams);
  const category = params.get('category') || '';
  const sort = params.get('sortBy') || sortDefault;

  const handleMenuItemClick = (selectedItems: string) => {
    params.set('category', selectedItems);
    setSearchParams(params);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const { pathname } = location;

    if (pathname.slice(1) === '') {
      setSelectActiveLink('');
    }

    if (pathname.slice(1) === 'products') {
      setSelectActiveLink(category);
    }

    if (pathname.slice(1) === 'cart') {
      setSelectActiveLink('cart');
    }

    if (pathname.slice(1) === 'favourites') {
      setSelectActiveLink('favourites');
    }
  }, [location]);

  return (
    <header className="header">
      <div className="header__left">
        <Link
          className="header__logo"
          to="/"
          onClick={() => handleMenuItemClick('')}
        >
          <Fade direction="left" triggerOnce>
            <img
              className="header__logo-img"
              src={isMenuOpen ? logo : logoBlack}
              alt="logo"
            />
          </Fade>
        </Link>

        <nav className="header__menu">
          <Link
            to="/"
            className={classnames('header__menu-link', {
              'active-menu-link': selectActiveLink === '',
            })}
            onClick={() => handleMenuItemClick('')}
          >
            <Fade direction="down" triggerOnce>
              home
            </Fade>
          </Link>

          {Object.values(CategoryType).map(item => (
            <Link
              key={item}
              to={normalizedMenuLink(item, limitDefault, offsetDefault, sort)}
              className={classnames('header__menu-link', {
                'active-menu-link': selectActiveLink === item,
              })}
              onClick={() => handleMenuItemClick(item)}
            >
              <Fade direction="down" triggerOnce>
                {item}
              </Fade>
            </Link>
          ))}
        </nav>
      </div>

      <div className="header__right">
        <Fade direction="right" triggerOnce>
          <div className="header__icons">
            {category && <SearchBar />}

            <div
              className="icon icon--theme__link "
              onClick={() => setThemeToggle(prev => !prev)}
            >
              <i
                className={`icon--${themeToggle ? 'moon' : 'sun'}`}
              />
            </div>

            <div className="icon icon--menu__link">
              <i
                className={`icon--${!isMenuOpen ? 'menu' : 'close'}`}
                onClick={() => setIsMenuOpen(prev => !prev)}
              />
            </div>

            <Link
              to="/favourites"
              className={classnames('icon icon--favourites__link-header', {
                'active-icon-link': selectActiveLink === 'favourites',
              })}
            >
              <CounterIcon
                iconClassName="icon--favourites"
                amount={favourite.length}
              />
            </Link>

            <Link
              to="/cart"
              className={classnames('icon icon--shopping-bag__link-header', {
                'active-icon-link': selectActiveLink === 'cart',
              })}
            >
              <CounterIcon
                iconClassName="icon--shopping-bag"
                amount={cart.length}
              />
            </Link>
          </div>
        </Fade>
      </div>

      {isMenuOpen && (
        <NavigationMobile onMenuOpen={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
};
