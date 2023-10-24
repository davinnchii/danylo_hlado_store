/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

// import logo from '../../assets/images/logo.png';
// import second from '../../assets/images/logo_black.png';
import './header.scss';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__left">
        <a className="header__logo" href="/">
          <img
            className="header__logo-img"
            src={isMenuOpen ? 'logo' : 'logo_black'}
            alt="logo"
          />
        </a>

        <nav className={`header__menu ${isMenuOpen ? 'active-menu' : ''}`}>
          <a href="/home" className="header__menu-link active-menu-link">
            home
          </a>
          <a href="/phones" className="header__menu-link">phones</a>
          <a href="/tablets" className="header__menu-link">tablets</a>
          <a href="/accessories" className="header__menu-link">accessories</a>
        </nav>
      </div>

      <div className="header__right">
        <div className="header__icons">
          <i
            className={`icon icon--${!isMenuOpen ? 'menu' : 'close'}`}
            onClick={() => setIsMenuOpen(prev => !prev)}
          />
          <i className="icon icon--favourites" />
          <i className="icon icon--shopping-bag" />
        </div>
      </div>
    </header>
  );
};
