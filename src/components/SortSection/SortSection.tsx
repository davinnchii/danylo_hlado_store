import React from 'react';
import { CustomSelect } from '../CustomSelect/CustomSelect';

interface Option {
  value: string;
  label: string;
}

type Props = {
  defaultValue: Option;
  options: Option[];
  label: string;
};

export const SortSection: React.FC<Props> = ({
  defaultValue,
  options,
  label,
}) => {
  const itemClassName = label === 'Sort by'
    ? 'sort__item--sort'
    : 'sort__item--pagination';

  return (
    <span className={`sort__item ${itemClassName}`}>
      <p
        className="sort__item-text"
        style={{ marginBottom: '4px' }}
      >
        {label}
      </p>
      <CustomSelect
        defaultValue={defaultValue}
        options={options}
      />
    </span>
  );
};
