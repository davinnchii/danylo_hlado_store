/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import logo from '../../assets/images/logo.png';
import logoBlack from '../../assets/images/logo-black.png';
import './header.scss';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectMenuActive, setSelectMenuActive] = useState('');

  const handleMenuItemClick = (selectedItem: string) => {
    setIsMenuOpen(false);
    setSelectMenuActive(selectedItem);
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

          <Link
            to="/phones"
            className={classnames('header__menu-link', {
              'active-menu-link': selectMenuActive === 'phones',
            })}
            onClick={() => handleMenuItemClick('phones')}
          >
            phones
          </Link>

          <Link
            to="/tablets"
            className={classnames('header__menu-link', {
              'active-menu-link': selectMenuActive === 'tablets',
            })}
            onClick={() => handleMenuItemClick('tablets')}
          >
            tablets
          </Link>

          <Link
            to="/accessories"
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

          <Link to="/favourites" className="icon icon--favourites" />

          <Link to="/shopping-bag" className="icon icon--shopping-bag" />
        </div>
      </div>
    </header>
  );
};
