import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from './Button';
import { AppRoutes } from '../routes/Routes';

const Header: FC = () => {
  const location = useLocation();

  return (
    <header className="py-5 border-b-2 border-blue-600 bg-blue-500 text-white">
      <div className="main-container">
        <nav className="flex justify-between items-center">
          <Link to={AppRoutes.HOME}>
            <h1 className="text-2xl font-bold">Movies App 🍿</h1>
          </Link>
          {location.pathname !== '/' && (
            <Button
              href={AppRoutes.HOME}
              label="Back"
              classes="text-sm bg-white text-black px-2 py-1 rounded font-medium"
            />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
