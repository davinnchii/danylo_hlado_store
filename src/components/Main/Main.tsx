import React from 'react';

import './main.scss';

export const Main = () => {
  return (
    <section className="main">
      <div className="container">
        <h1 className="main__title">Welcome to Nice Gadgets store!</h1>

        <div className="main__carousel">
          <div className="main__carousel-content">
            <div className="main__carousel-arrows">
              <button
                className="main__carousel-arrow arrow arrow-left"
                type="button"
                aria-label="arrow-left"
              />

              <button
                className="main__carousel-arrow arrow arrow-right"
                type="button"
                aria-label="arrow-right"
              />
            </div>
          </div>

          <div className="main__carousel-dots">
            <button
              className="dot active-dot"
              type="button"
              aria-label="dot"
            />

            <button
              className="dot"
              type="button"
              aria-label="dot"
            />
            <button
              className="dot"
              type="button"
              aria-label="dot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
