import React from 'react';

import './newModels.scss';

export const NewModels = () => {
  return (
    <section className="new-models">
      <div className="container">
        <div className="new-models__top">
          <h2 className="new-models__title">
            Brand new models
          </h2>

          <div className="new-models__arrows">
            <button
              className="new-models__arrow arrow arrow-left"
              type="button"
              aria-label="arrow-left"
            />
            <button
              className="new-models__arrow arrow arrow-right"
              type="button"
              aria-label="arrow-right"
            />
          </div>
        </div>

        <ul className="new-models__list">
          {/* Card Items */}
        </ul>
      </div>
    </section>
  );
};
