import React from 'react';

import erorr_404 from '../../assets/images/404-error.png';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => (
  <div className="page-not-found">
    <h1 className="title">Page not found</h1>
    <img
      src={erorr_404}
      alt="error 404"
      className="page-not-found_img"
    />
  </div>
);
