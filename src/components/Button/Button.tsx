import React, { useState } from 'react';
import './Button.scss';
import classNames from 'classnames';

type Props = {
  content: string;
};

export const Button: React.FC<Props> = ({ content }) => {
  const [isInCart, setIstInCart] = useState(false);

  return (
    <button
      className={classNames('Button', {
        Selected: isInCart,
      })}
      type="button"
      onClick={() => setIstInCart(!isInCart)}
    >
      {content}
    </button>
  );
};
