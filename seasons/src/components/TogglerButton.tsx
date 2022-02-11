import { FC } from 'react';
import { useThemeContext } from '../hooks/use-theme';

const TogglerButton: FC = () => {
  const { dark, toggleTheme } = useThemeContext();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex justify-center py-3 px-5 rounded-md font-bold"
    >
      {dark ? 'Toggle Light Theme' : 'Toggle Dark Theme'}
    </button>
  );
};

export default TogglerButton;
