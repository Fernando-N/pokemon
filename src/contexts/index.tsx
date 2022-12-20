import { createContext, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../styles/theme/default';

interface ThemeContextValue {
  theme: {};
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeContextProvider(props: ThemeProviderProps) {
  const [theme, setTheme] = useState(dark);

  function toggleTheme() {
    setTheme(theme === dark ? light : dark);
  }

  const value: ThemeContextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
