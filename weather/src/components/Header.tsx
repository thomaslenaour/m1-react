import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="bg-blue-200 shadow-sm">
      <div className="main-container py-5">
        <h1 className="text-center font-bold text-2xl mb-2">
          ☀️ Weather App 🌴
        </h1>
        <p className="text-xs text-center">
          You planned some holidays? Check the <strong>weather</strong> before
          going out... 😉
        </p>
      </div>
    </header>
  );
};

export default Header;
