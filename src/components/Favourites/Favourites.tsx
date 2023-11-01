import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../productCard/productCard';
import './Favourites.scss';
import { FavouriteContext } from '../../context/FavouriteContext';
import { BackButton } from '../BackButton';
import HaveNoFavourites from '../../assets/images/no-favourites.png';
import { HomeButton } from '../HomeButton/HomeButton';
import { BreadcrumbsNav } from '../Breadcrumbs/Breadcrumbs';

export const Favourites = () => {
  const { favourite } = useContext(FavouriteContext);

  return (
    <div className="favourites wrapper container">
      <BreadcrumbsNav
        className="top-bar top-bar--no-margin"
        links={[
          <Link
            to="/favourites"
            key="favourites"
            className="top-bar__link-text top-bar__link-text--last"
          >
            Favourites
          </Link>,
        ]}
      />
      {favourite.length ? (
        <>
          <div className="favourites__title">Favourites</div>
          <div className="favourites__items">
            {`${favourite.length} items`}
          </div>
          <div className="favourites__products">
            {favourite.map((prod) => (
              <ProductCard product={prod} key={prod.id} />
            ))}
          </div>
        </>
      ) : (
        <>
          <BackButton />

          <h1 className="favourites__title">
            You have no favourites
          </h1>

          <img
            src={HaveNoFavourites}
            alt="You have no favourites"
            className="img-favourites"
          />

          <div className="button-home">
            <HomeButton />
          </div>
        </>
      )}
    </div>
  );
};
