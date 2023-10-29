import React, { useContext } from 'react';
import './Button.scss';
import classNames from 'classnames';
import { CartContext } from '../../context/CartContext';
import { CartProduct } from '../../Types/CartProduct';

type Props = {
  content: string;
  product: CartProduct,
};

export const Button: React.FC<Props> = ({ content, product }) => {
  const { cart, setCart } = useContext(CartContext);

  const isInCart = cart.find(({ id }) => id === product.id);

  const toggleButton = () => {
    if (isInCart) {
      setCart(curCart => (
        curCart.filter(({ id }) => id !== product.id)));

      return;
    }

    setCart(curCart => ([
      ...curCart,
      product,
    ]));
  };

  return (
    <button
      className={classNames('Button', {
        Selected: isInCart,
      })}
      type="button"
      onClick={toggleButton}
    >
      {isInCart ? 'Remove from cart' : content}
    </button>
  );
};
