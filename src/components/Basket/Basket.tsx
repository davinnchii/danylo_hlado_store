import React from 'react';

import phoneimage from '../../assets/images/Basket/first.png';
import close from '../../assets/icons/close.svg';
import plus from '../../assets/icons/Plus.svg';
import minus from '../../assets/icons/Minus.svg';

import './basket.scss';

export const Basket = () => {
  return (
    <section className="basket">
      <div className="basket__title">Cart</div>
      <div className="basket__cards">
        <div className="basket__card">
          <img
            className="basket__card__icon padding"
            src={close}
            alt=""
          />
          <img
            className="basket__card__phone padding"
            src={phoneimage}
            alt=""
          />
          <div className="basket__card__title padding">
            Apple iPhone 14 Pro 128GB Silver (MQ023)
          </div>
          <div className="basket__card__quantity padding">
            <img
              className="basket__card__icon-minus padding"
              src={minus}
              alt=""
            />
            <div className="basket__card__count padding">1</div>
            <img
              className="basket__card__icon-plus padding"
              src={plus}
              alt=""
            />
          </div>
          <div className="basket__card__totally padding">
            $999
          </div>
        </div>
        <div className="basket__card">
          <img
            className="basket__card__icon padding"
            src={close}
            alt=""
          />
          <img
            className="basket__card__phone padding"
            src={phoneimage}
            alt=""
          />
          <div className="basket__card__title padding">
            Apple iPhone 14 Pro 128GB Silver (MQ023)
          </div>
          <div className="basket__card__quantity padding">
            <img
              className="basket__card__icon-minus padding"
              src={minus}
              alt=""
            />
            <div className="basket__card__count padding">1</div>
            <img
              className="basket__card__icon-plus padding"
              src={plus}
              alt=""
            />
          </div>
          <div className="basket__card__totally padding">
            $999
          </div>
        </div>
        <div className="basket__card">
          <img
            className="basket__card__icon padding"
            src={close}
            alt=""
          />
          <img
            className="basket__card__phone padding"
            src={phoneimage}
            alt=""
          />
          <div className="basket__card__title padding">
            Apple iPhone 14 Pro 128GB Silver (MQ023)
          </div>
          <div className="basket__card__quantity padding">
            <img
              className="basket__card__icon-minus padding"
              src={minus}
              alt=""
            />
            <div className="basket__card__count padding">1</div>
            <img
              className="basket__card__icon-plus padding"
              src={plus}
              alt=""
            />
          </div>
          <div className="basket__card__totally padding">
            $999
          </div>
        </div>
      </div>
      <div className="basket__totally totally">
        <div className="totally__title">$2657</div>
        <div className="totally__subtitle">Total for 3 items</div>
        <a className="totally__button" href="/">Checkout</a>
      </div>
    </section>
  );
};
