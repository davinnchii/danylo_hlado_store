import React from 'react';
import Select, { StylesConfig, Theme } from 'react-select';

interface Option {
  value: string;
  label: string;
}

type Props = {
  defaultValue: Option;
  options: Option[];
};

const optionStyles = {
  fontFamily: 'Mont-Regular, sans-serif',
  fontSize: '12px',
  fontWeight: '500',
  color: '#89939a',
  borderRadius: '8px',
};

const styles: StylesConfig = {
  singleValue: (provided) => ({
    ...provided,
    fontSize: '14px',
    color: '#0f0f11',
  }),
  input: (provided) => ({
    ...provided,
    caretColor: 'transparent',
  }),
  control: (provided, state) => ({
    ...provided,

    borderRadius: '8px',
    width: '150px',
    height: '40px',
    cursor: 'pointer',
    '&:hover': {
      color: state.isFocused ? '#89939a' : '#b4bdc3',
      border: '1px solid #0f0f11',
    },
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  option: (provided, state) => ({
    ...provided,
    ...optionStyles,
    background: state.isFocused ? '#fafbfc' : 'transparent',
    cursor: 'pointer',
    color: state.isFocused ? '#0f0f11' : '#89939a',
  }),
};

const theme = (baseTheme: Theme) => ({
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary50: '#b4bdc3',
    primary: '#b4bdc3',
  },
});

export const CustomSelect: React.FC<Props> = ({
  defaultValue,
  options,
}) => (
  <Select
    className="sort__select"
    defaultValue={defaultValue}
    options={options}
    styles={styles}
    theme={theme}
  />
);
