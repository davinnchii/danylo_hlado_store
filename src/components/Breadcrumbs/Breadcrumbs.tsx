import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';
import homeIcon from '../../assets/icons/Home.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';

type Props = {
  links: JSX.Element[];
};

export const BreadcrumbsNav: React.FC<Props> = ({
  links,
}) => {
  return (
    <div className="top-bar">
      <Breadcrumbs
        separator={
          (
            <img
              className="top-bar__icon"
              src={arrowRightIcon}
              alt="home-icon"
            />
          )
        }
      >
        <Link
          to="/"
          className="top-bar__link"
        >
          <img
            className="top-bar__icon"
            src={homeIcon}
            alt="home-icon"
          />
        </Link>
        {links}
      </Breadcrumbs>
    </div>
  );
};
