/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import classnames from 'classnames';
import { Fade } from 'react-awesome-reveal';

import logo from '../../assets/images/logo.png';
import logoBlack from '../../assets/images/logo-black.png';
import './header.scss';
import { limitDefault, offsetDefault, sortDefault } from '../../utils/constant';
import { normalizedMenuLink } from '../../utils/getNormalizedMenuLink';
import { NavigationMobile } from '../NavigationMobile';
import { CategoryType } from '../../Types/CategoryType';
import { SearchBar } from '../SearchBar/SearchBar';
import { useFavourite } from '../../context/FavouriteContext';
import { useCart } from '../../context/CartContext';

export const Header: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { favourite } = useFavourite();
  const { cart } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectMenuActive, setSelectMenuActive] = useState<string>('');

  const params = new URLSearchParams(searchParams);
  const category = params.get('category') || '';
  const sort = params.get('sortBy') || sortDefault;

  const handleMenuItemClick = (selectedItems: string) => {
    params.set('category', selectedItems);
    setSearchParams(params);
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
          <Fade direction="left" triggerOnce>
            <img
              className="header__logo-img"
              src={isMenuOpen ? logo : logoBlack}
              alt="logo"
            />
          </Fade>
        </Link>

        <nav className="header__menu">
          <Fade direction="down" triggerOnce>

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
          </Fade>
        </nav>
      </div>

      <div className="header__right">
        <Fade direction="right" triggerOnce>
          <div className="header__icons">
            <SearchBar />

            <i
              className={`icon icon--${!isMenuOpen ? 'menu' : 'close'}`}
              onClick={() => setIsMenuOpen(prev => !prev)}
            />

            <Link
              to="/favourites"
              className="icon icon--favourites__link-header"
            >
              <i className="icon--favourites">
                {favourite.length > 0 && (
                  <p className="icon--count">{favourite.length}</p>
                )}
              </i>
            </Link>

            <Link to="/cart" className="icon icon--shopping-bag__link-header">
              <i className="icon--shopping-bag">
                {cart.length > 0 && (
                  <p className="icon--cart">{cart.length}</p>
                )}
              </i>
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
