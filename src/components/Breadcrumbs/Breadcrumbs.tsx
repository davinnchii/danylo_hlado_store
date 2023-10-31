import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  path: string;
  className?: string;
  normalizedCategoryLink: string;
};

export const Breadcrumbs: React.FC<Props> = ({
  path,
  className,
  normalizedCategoryLink,
}) => {
  return (
    <Link
      to={path}
      className={className}
    >
      {normalizedCategoryLink}
    </Link>
  );
};
