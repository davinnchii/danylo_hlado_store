/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import Select, { StylesConfig, Theme } from 'react-select';

interface Option {
  value: string;
  label: string;
}

type Props = {
  defaultValue: Option;
  options: Option[];
  onChange: (page: number) => void,
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
    height: '40px',
    cursor: 'pointer',
    fontSize: '12px',
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
  onChange,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const handleSelectChange = useCallback((selectedOption: any) => {
    const normalizedOption = selectedOption.value.replace(/[^a-zA-Z]/g, '');

    onChange(1);

    if (Number.isNaN(+selectedOption.value)) {
      params.set('sortBy', normalizedOption);
      setSearchParams(params);

      return;
    }

    params.set('limit', selectedOption.value);
    setSearchParams(params);
  }, [params, onChange]);

  return (
    <Select
      className="sort__select"
      defaultValue={defaultValue}
      options={options}
      styles={styles}
      theme={theme}
      onChange={handleSelectChange}
    />
  );
};
