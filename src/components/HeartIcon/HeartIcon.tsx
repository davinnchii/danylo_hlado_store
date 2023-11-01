import React, { useContext } from 'react';
import './HeartIcon.scss';
import heart_empty from '../../assets/icons/favouritesh-heart-like.svg';
import heart_filled from '../../assets/icons/favourites-filled-heart-like.svg';
import { FavouriteContext } from '../../context/FavouriteContext';
import { ProductType } from '../../types';

type Props = {
  product: ProductType,
};

export const HeartIcon: React.FC<Props> = ({ product }) => {
  const { favourite, setFavourite } = useContext(FavouriteContext);

  const isLiked = favourite.find(({ itemId }) => itemId === product.itemId);

  const addToFavourites = () => {
    if (isLiked) {
      setFavourite(curFav => {
        return curFav.filter(({ itemId }) => itemId !== product.itemId);
      });

      return;
    }

    setFavourite(curFav => {
      return [...curFav, { ...product, id: product.itemId }];
    });
  };

  return (
    <button
      className="HeartIcon"
      onClick={addToFavourites}
      type="button"
    >
      <input
        src={isLiked ? heart_filled : heart_empty}
        alt="like icon"
        type="image"
      />
    </button>
  );
};
