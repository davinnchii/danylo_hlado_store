/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import classnames from 'classnames';

export const SearchBar = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <div className="icon header__search-bar">
      <i
        className="icon--search"
        onClick={() => setIsSearchBarOpen(prev => !prev)}
      />

      <input
        className={classnames('header__search-bar-input', {
          'is-search-bar-active': isSearchBarOpen,
        })}
        type="text"
        placeholder="Type something..."
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
    </div>
  );
};
