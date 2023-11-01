import React from 'react';
import Popup from 'reactjs-popup';
import './ErrorPopUp.scss';
import { ModalButton } from '../ModalButton';

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

          <ModalButton
            title="Reload"
            onClick={() => onUpdatePage(new Date())}
          />
        </div>
      </Popup>
    </>
  );
};
