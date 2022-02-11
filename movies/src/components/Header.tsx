import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../routes/Routes';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="py-5 border-b-2 border-blue-600 bg-blue-500 text-white">
      <div className="main-container">
        <div className="flex justify-between items-center">
          <Link to={AppRoutes.HOME}>
            <h1 className="text-2xl font-bold">Movies App 🍿</h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
