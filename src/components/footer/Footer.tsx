import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <a href="#home" className="footer__logo-link">
        <img
          className="footer__logo-image"
          alt="nice-gadgets-logo"
          src="../../../public/logo512.png"
        />
      </a>

      <div className="footer__links">
        <a href="/" className="footer__link">github</a>

        <a href="/" className="footer__link">contacts</a>

        <a href="/" className="footer__link">rights</a>
      </div>

      <div className="footer__back-block">
        <a href="/" className="footer__back-button" aria-label="go-to-top">
          <i className="footer__back-button" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};
