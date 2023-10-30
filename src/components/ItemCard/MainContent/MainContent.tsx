/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { Button } from '../../Button';
import { HeartIcon } from '../../HeartIcon';
import { getSplitedGB } from '../../../utils/getSplitedGB';
import { ProductCartType, ProductType } from '../../../types';
import { getImageUrl } from '../../../utils/getImageUrl';
import './MainContent.scss';
import { BackButton } from '../../BackButton';

type Props = {
  product: ProductCartType | null;
  phoneId: number;
  selectedCapacity: string;
  onSelectCapacity: (selectedCapacity: string) => void;
  onSelectColor: (selectedColor: string) => void;
  productInfo: ProductType;
};

export const MainContent: React.FC<Props> = ({
  product,
  phoneId,
  selectedCapacity,
  onSelectCapacity,
  onSelectColor,
  productInfo,
}) => {
  if (!product) {
    return <h1>hello</h1>;
  }

  const {
    id,
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
  } = product;

  const [selectedPhoto, setSelectedPhoto] = useState(getImageUrl(images[0]));
  const [selectedColor, setSelectedColor] = useState(color);

  const statsTableData = {
    screen,
    resolution,
    processor,
    RAM: getSplitedGB(ram),
  };

  useEffect(() => {
    setSelectedColor(product.color);
    setSelectedPhoto(getImageUrl(images[0]));
  }, [product, images]);

  const handleChangeColor = (newColor: string) => {
    onSelectColor(newColor);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <BackButton />

        <section className="MainContent">
          <h1 className="MainContent__header">
            {name}
          </h1>

          <div className="MainContent__photos">
            {images.map((image, index) => (
              <input
                onClick={() => setSelectedPhoto(getImageUrl(image))}
                key={image}
                src={getImageUrl(image)}
                alt={`${index}`}
                type="image"
                className={classNames('MainContent__photos__item', {
                  'MainContent__photos__item-selected':
                    selectedPhoto === getImageUrl(image),
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
                  onClick={() => handleChangeColor(currentColor)}
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
              <Button
                content="Add to cart"
                product={{
                  id,
                  name,
                  amount: 1,
                  price: priceDiscount,
                  image: images[0],
                }}
              />

              <HeartIcon product={{
                ...productInfo,
                id,
              }}
              />
            </div>

            <div className="MainContent__stats__short">
              {Object.entries(statsTableData).map(([key, value]) => (
                <div className="MainContent__stats__short__row" key={key}>
                  <span className="MainContent__stats__short__header">
                    {key}
                  </span>

                  <span className="MainContent__stats__short__value">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
