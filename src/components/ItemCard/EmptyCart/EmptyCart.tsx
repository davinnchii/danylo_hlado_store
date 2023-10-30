import React from 'react';
import './EmptyCart.scss';
import { BackButton } from '../../BackButton';

export const EmptyCart = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <section className="Empty-cart">
          <BackButton />

          <h1 className="Empty-cart__header">
            The cart is Empty
          </h1>
        </section>
      </div>
    </div>
  );
};
