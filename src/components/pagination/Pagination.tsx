import React from 'react';
import './pagination.scss';

export const Pagination: React.FC = () => (
  <div className="pagination">
    <div className="pagination__button">
      <div className="pagination__arrow pagination__arrow--left" />
    </div>
    <div className="pagination__button">
      <div className="pagination__content">
        1
      </div>
    </div>
    <div className="pagination__button pagination__button--active">
      <div className="pagination__content pagination__content--active">
        2
      </div>
    </div>
    <div className="pagination__button">
      <div className="pagination__content">
        3
      </div>
    </div>
    <div className="pagination__button">
      <div className="pagination__content">
        4
      </div>
    </div>
    <div className="pagination__button">
      <div className="pagination__arrow pagination__arrow--right" />
    </div>
  </div>
);
