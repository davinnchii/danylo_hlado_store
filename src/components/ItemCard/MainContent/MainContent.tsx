import React, { useState } from 'react';
import classNames from 'classnames';
import './MainContent.scss';
import { Button } from '../../Button';
import { Phone } from '../../../Types';
import { HeartIcon } from '../../HeartIcon';
import { getSplitedGB } from '../../../utils/getSplitedGB';
import rightArrow from '../../../assets/icons/Chevron (Arrow Right).svg';

const getImagelink = (img: string) => {
  return `https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${img}`;
};

type Props = {
  phone: Phone;
  phoneId: number;
  selectedCapacity: string;
  onSelectCapacity: (selectedCapacity: string) => void;
};

export const MainContent: React.FC<Props> = ({
  phone,
  phoneId,
  selectedCapacity,
  onSelectCapacity,
}) => {
  const {
    name,
    images,
    colorsAvailable,
    color,
    capacityAvailable,
    priceRegular,
    priceDiscount,
    screen,
    resolution,
    processor,
    ram,
  } = phone;

  const [selectedPhoto, setSelectedPhoto] = useState(getImagelink(images[0]));
  const [selectedColor, setSelectedColor] = useState(color);

  const statsTableData = {
    screen,
    resolution,
    processor,
    RAM: getSplitedGB(ram),
  };

  return (
    <div className="container">
      <div className="wrapper">
        <a href="/" className="ItemCard__back-link">
          <img
            className="ItemCard__back-arrow"
            src={rightArrow}
            alt="back icon"
          />
        </a>

        <section className="MainContent">
          <h1 className="MainContent__header">{name}</h1>

          <div className="MainContent__photos">
            {images.map((image, index) => (
              <input
                onClick={() => setSelectedPhoto(getImagelink(image))}
                key={image}
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
            <div className="MainContent__stats__colors-id">
              <p className="MainContent__stats__colors-header">
                Available colors
              </p>

              <span className="MainContent__stats__id">
                {`id:${phoneId}`}
              </span>
            </div>

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

            <p className="MainContent__stats__capacity-header">
              Select capacity
            </p>

            <div className="MainContent__stats__capacites">
              {capacityAvailable.map((currentCapacity) => (
                <button
                  key={currentCapacity}
                  className={classNames('MainContent__stats__capacity', {
                    'MainContent__stats__capacity-selected':
                      selectedCapacity === currentCapacity,
                  })}
                  onClick={() => onSelectCapacity(currentCapacity)}
                  aria-label={`capacity-${currentCapacity}`}
                  type="button"
                >
                  {getSplitedGB(currentCapacity)}
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
              {Object.entries(statsTableData).map(([key, value]) => {
                return (
                  <div className="MainContent__stats__short__row" key={key}>
                    <span className="MainContent__stats__short__header">
                      {key}
                    </span>

                    <span className="MainContent__stats__short__value">
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
