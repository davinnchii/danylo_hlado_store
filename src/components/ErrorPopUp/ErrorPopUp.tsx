import React from 'react';
import Popup from 'reactjs-popup';

export const ErrorPopUp = () => {
  return (
    <Popup
      trigger={(
        <button
          type="button"
        >
          Trigger
        </button>
      )}
      position="right bottom"
    >

      <div>
        Popup content here !!
      </div>
    </Popup>
  );
};
