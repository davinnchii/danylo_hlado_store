/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import classnames from 'classnames';

import logo from '../../assets/images/logo.png';
import logoBlack from '../../assets/images/logo-black.png';
import './header.scss';
import { limitDefault, offsetDefault, sortDefault } from '../../utils/constant';
import { normalizedMenuLink } from '../../utils/getNormalizedMenuLink';
import { NavigationMobile } from '../NavigationMobile';
import { CategoryType } from '../../types/CategoryType';

export const Header: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

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
          <img
            className="header__logo-img"
            src={isMenuOpen ? logo : logoBlack}
            alt="logo"
          />
        </Link>

        <nav className="header__menu">
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

          <Link to="/favourites" className="icon icon--favourites__link-header">
            <i className="icon--favourites" />
          </Link>

          <Link to="/cart" className="icon icon--shopping-bag__link-header">
            <i className="icon--shopping-bag" />
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <NavigationMobile onMenuOpen={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
};
