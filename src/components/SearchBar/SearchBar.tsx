/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    if (query === '') {
      params.delete('query');
      setSearchParams(params);
    }
  }, [query]);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      params.set('query', query.toLowerCase());
      setSearchParams(params);
    }
  };

  return (
    <div className="header__search-bar">
      <div
        className="icon"
        onClick={() => setIsSearchBarOpen(prev => !prev)}
      >
        <i
          className="icon--search"
        />
      </div>

      <input
        className={classnames('header__search-bar-input', {
          'is-search-bar-active': isSearchBarOpen,
        })}
        type="text"
        placeholder="Type something..."
        value={query}
        onChange={handleQueryChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};
