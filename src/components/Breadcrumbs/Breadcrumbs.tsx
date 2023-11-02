import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';
import './Breadcrumbs.scss';
import homeIcon from '../../assets/icons/Home.svg';
import homeIconDarkMode from '../../assets/icons-dark-mode/home.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import { useTheme } from '../../context/ThemeContext';

type Props = {
  className: string;
  links: JSX.Element[];
};

export const BreadcrumbsNav: React.FC<Props> = ({
  links,
  className,
}) => {
  const { theme } = useTheme();

  return (
    <div className={className}>
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
            src={theme.theme === 'light' ? homeIcon : homeIconDarkMode}
            alt="home-icon"
          />
        </Link>
        {links}
      </Breadcrumbs>
    </div>
  );
};
