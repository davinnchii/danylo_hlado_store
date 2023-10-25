import React, { useState } from 'react';
import classNames from 'classnames';
import './MainContent.scss';
import { Button } from '../../Button';
import { Phone } from '../../../Types';
import { HeartIcon } from '../../HeartIcon';

const getImagelink = (img: string) => {
  return `https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${img}`;
};

const getValidGBString = (GBString: string) => `${GBString.slice(0, -2)} GB`;

type Props = {
  phone: Phone;
  phoneId: number;
};

export const MainContent: React.FC<Props> = ({ phone, phoneId }) => {
  const {
    name,
    images,
    colorsAvailable,
    color,
    capacityAvailable,
    capacity,
    priceRegular,
    priceDiscount,
    screen,
    resolution,
    processor,
    ram,
  } = phone;

  const [selectedPhoto, setSelectedPhoto] = useState(getImagelink(images[0]));
  const [selectedColor, setSelectedColor] = useState(color);
  const [selectedCapacity, setSelectedCapacity] = useState(capacity);

  return (
    <main className="MainContent">
      <h1 className="MainContent__header">{name}</h1>

      <div className="MainContent__photos">
        {images.map((image, index) => (
          <input
            onClick={() => setSelectedPhoto(getImagelink(image))}
            key={image}
            // eslint-disable-next-line max-len
            src={getImagelink(image)}
            alt={`${index}`}
            type="image"
            className={classNames('MainContent__photos__item', {
              'MainContent__photos__item-selected':
                selectedPhoto === getImagelink(image),
            })}
          />
        ))}
      </div>

      <div className="MainContent__selected-photo">
        <img
          src={selectedPhoto}
          alt="selected"
          className="MainContent__selected-photo__image"
        />
      </div>

      <div className="MainContent__stats">
        <p className="MainContent__stats__colors-header">Available colors</p>

        <div className="MainContent__stats__colors">
          {colorsAvailable.map((currentColor) => (
            <button
              key={currentColor}
              className={classNames('MainContent__stats__color', {
                'MainContent__stats__color-selected':
                  selectedColor === currentColor,
              })}
              onClick={() => setSelectedColor(currentColor)}
              aria-label={`color-${currentColor}`}
              type="button"
              style={{
                backgroundColor: currentColor,
              }}
            />
          ))}
        </div>

        <p className="MainContent__stats__capacity-header">Select capacity</p>

        <div className="MainContent__stats__capacites">
          {capacityAvailable.map((currentCapacity) => (
            <button
              key={currentCapacity}
              className={classNames('MainContent__stats__capacity', {
                'MainContent__stats__capacity-selected':
                  selectedCapacity === currentCapacity,
              })}
              onClick={() => setSelectedCapacity(currentCapacity)}
              aria-label={`capacity-${currentCapacity}`}
              type="button"
            >
              {getValidGBString(currentCapacity)}
            </button>
          ))}
        </div>

        <div className="MainContent__stats__prices">
          <span className="MainContent__stats__price-discount">
            {priceDiscount}
          </span>

          <span className="MainContent__stats__price-regular">
            {priceRegular}
          </span>
        </div>

        <div className="MainContent__stats__buttons">
          <Button content="Add to cart" />

          <HeartIcon />
        </div>

        <div className="MainContent__stats__short">
          <span className="MainContent__stats__short__screen-header
            MainContent__stats__short__header"
          >
            Screen
          </span>

          <span className="MainContent__stats__short__resolution-header
            MainContent__stats__short__header"
          >
            Resolution
          </span>

          <span className="MainContent__stats__short__processor-header
            MainContent__stats__short__header"
          >
            Processor
          </span>

          <span className="MainContent__stats__short__ram-header
            MainContent__stats__short__header"
          >
            RAM
          </span>

          <span className="MainContent__stats__short__screen
            MainContent__stats__short__value"
          >
            {screen}
          </span>

          <span className="MainContent__stats__short__resolution
            MainContent__stats__short__value"
          >
            {resolution}
          </span>

          <span className="MainContent__stats__short__processor
            MainContent__stats__short__value"
          >
            {processor}
          </span>

          <span className="MainContent__stats__short__ram
            MainContent__stats__short__value"
          >
            {getValidGBString(ram)}
          </span>
        </div>
      </div>

      <div className="MainContent__id">
        {`id:${phoneId}`}
      </div>
    </main>
  );
};
