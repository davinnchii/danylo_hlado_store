import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import './Footer.scss';
import imgToTop from
  '../../assets/icons/Slider button - Default (right).png';

export const Footer = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <Link to="/" className="footer__logo-link">
        <img
          className="footer__logo-image"
          alt="nice-gadgets-logo"
          src={logo}
        />
      </Link>

      <div className="footer__links">
        <a
          href="https://github.com/Peppers-Team"
          className="footer__link"
          target="_blank"
          rel="noreferrer noopener"
        >
          github
        </a>

        <Link
          to="/contacts"
          className="footer__link"
          target="_blank"
          rel="noreferrer noopener"
        >
          contacts
        </Link>

        <a
          href="https://savelife.in.ua/donate/#donate-army-card-monthly"
          className="footer__link support_ukraine"
          target="_blank"
          rel="noreferrer noopener"
        >
          support_ukraine
        </a>
      </div>

      <button
        type="button"
        className="footer__back top-button"
        aria-label="go-to-top"
        onClick={backToTop}
      >
        <div className="top-button__wrap">
          <i className="top-button__text" aria-hidden="true">
            BACK TO TOP
          </i>

          <img
            src={imgToTop}
            alt="BACK TO TOP"
            className="top-button__img"
          />
        </div>
      </button>
    </footer>
  );
};
