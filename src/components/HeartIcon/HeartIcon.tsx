import React, { useState } from 'react';
import './HeartIcon.scss';
import heart_empty from '../../assets/icons/favouritesh-heart-like.svg';
import heart_filled from '../../assets/icons/favourites-filled-heart-like.svg';

export const HeartIcon = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      className="HeartIcon"
      onClick={() => setIsLiked(!isLiked)}
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
