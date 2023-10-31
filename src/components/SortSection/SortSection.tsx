/* eslint-disable no-console */
import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

type Props = {
  value: string;
  onChange: (newValue: SelectChangeEvent) => void,
  label: string,
  options: string[],
};

export const SortSection: React.FC<Props> = ({
  value,
  label,
  options,
  onChange,
}) => {
  const itemClassName = label === 'Sort by'
    ? 'sort__item--sort'
    : 'sort__item--pagination';

  return (
    <FormControl
      sx={{ m: 1, minWidth: 120 }}
      className={`sort__item ${itemClassName}`}
    >
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        label="Age"
        onChange={onChange}
      >
        {options.map(data => (
          <MenuItem
            value={data}
            key={data}
            className={`sort__item ${itemClassName}`}
          >
            <p
              className="sort__item-text"
              style={{ marginBottom: '4px' }}
            >
              {`${data[0].toUpperCase()}${data.slice(1)}`}
            </p>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
