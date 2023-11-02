import React, { useContext } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

type Theme = { theme: string };
const initialTheme: Theme = { theme: 'dark' };

interface ThemeContextType {
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export const ThemeContext = React.createContext({} as ThemeContextType);

type Props = {
  children: React.ReactNode,
};

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useLocalStorageState<Theme>('theme', initialTheme);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div id={`is-${theme.theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
