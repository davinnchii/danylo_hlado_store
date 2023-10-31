import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import './ErrorPopUp.scss';

type Props = {
  open: boolean,
};

export const ErrorPopUp: React.FC<Props> = ({ open }) => {
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    if (timer > 0 && open) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [open, timer]);

  return (
    <>
      <Popup open={open} position="center center">
        <div className="ErrorPopUp">
          <h2 className="ErrorPopUp__header">
            Something went wrong
          </h2>

          <span className="ErrorPopUp__timer">
            {`Reload in ${timer}`}
          </span>
        </div>
      </Popup>
    </>
  );
};
