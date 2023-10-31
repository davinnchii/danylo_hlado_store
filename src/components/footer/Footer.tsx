import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import './Footer.scss';

export const Footer = () => {
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
        >
          github
        </a>

        <a
          href="https://maps.app.goo.gl/XNh35WymPsc6GJDJA"
          className="footer__link"
        >
          contacts
        </a>

        <a
          href="https://savelife.in.ua/donate/#donate-army-card-monthly"
          className="footer__link support_ukraine"
        >
          support_ukraine
        </a>
      </div>

      <div className="footer__back-block">
        <a href="/" className="footer__back-button" aria-label="go-to-top">
          <i className="footer__back-button" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};
