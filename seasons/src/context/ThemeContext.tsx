import { createContext } from 'react';

interface IThemeContext {
  dark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export default ThemeContext;
