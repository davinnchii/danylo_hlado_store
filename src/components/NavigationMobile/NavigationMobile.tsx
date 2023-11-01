import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { CategoryType } from '../../Types/CategoryType';
import { normalizedMenuLink } from '../../utils/getNormalizedMenuLink';
import { limitDefault, offsetDefault, sortDefault } from '../../utils/constant';
import './navigationMobile.scss';

type Props = {
  onMenuOpen: (value: boolean) => void;
};

export const NavigationMobile: React.FC<Props> = ({ onMenuOpen }) => {
  const [searchParams, setSeacrhParams] = useSearchParams();

  const params = new URLSearchParams(searchParams);
  const sort = params.get('sortBy') || sortDefault;

  const handleMenuItemClick = (selectedItems: string) => {
    params.set('category', selectedItems);
    setSeacrhParams(params);
    onMenuOpen(false);
  };

  const handleIconsClick = () => {
    onMenuOpen(false);
  };

  return (
    <nav className="navigation-mobile">
      <div className="navigation-mobile__menu">
        <Link
          to="/"
          className="navigation-mobile__menu-link"
          onClick={() => handleMenuItemClick('')}
        >
          home
        </Link>

        {Object.values(CategoryType).map(item => (
          <Link
            key={item}
            to={normalizedMenuLink(item, limitDefault, offsetDefault, sort)}
            className="navigation-mobile__menu-link"
            onClick={() => handleMenuItemClick(item)}
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="navigation-mobile__icons">
        <Link
          to="/favourites"
          className="icon icon--favourites__link-navigation-mobile"
          onClick={handleIconsClick}
        >
          <i className="icon--favourites" />
        </Link>

        <Link
          to="/cart"
          className="icon icon--shopping-bag__link-navigation-mobile"
          onClick={handleIconsClick}
        >
          <i className="icon--shopping-bag" />
        </Link>
      </div>
    </nav>
  );
};
