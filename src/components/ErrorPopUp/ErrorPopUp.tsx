import React from 'react';
import Popup from 'reactjs-popup';
import './ErrorPopUp.scss';

type Props = {
  open: boolean,
  onUpdatePage: (date: Date) => void,
};

export const ErrorPopUp: React.FC<Props> = ({ open, onUpdatePage }) => {
  return (
    <>
      <Popup open={open} position="center center">
        <div className="ErrorPopUp">
          <h2 className="ErrorPopUp__header">
            Something went wrong
          </h2>

          <button
            className="ErrorPopUp__button"
            type="button"
            onClick={() => onUpdatePage(new Date())}
          >
            Reload
          </button>
        </div>
      </Popup>
    </>
  );
};
