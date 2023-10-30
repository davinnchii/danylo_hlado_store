import React from 'react';
import './BackButton.scss';
import { useNavigate } from 'react-router-dom';
import rightArrow from '../../assets/icons/Chevron (Arrow Right).svg';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      aria-label="go-back-button"
      className="Back-button__back-link"
      onClick={() => navigate(-1)}
    >
      <img
        className="Back-button__back-arrow"
        src={rightArrow}
        alt="back icon"
      />
    </button>
  );
};
