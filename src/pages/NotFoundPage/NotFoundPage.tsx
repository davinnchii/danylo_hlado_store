import React from 'react';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => (
  <div className="page-not-found">
    <h1 className="title">Page not found</h1>
    <img
      src="../../assets/images/404-image.png"
      alt="error 404"
      className="page-not-found_img"
    />
  </div>
);
