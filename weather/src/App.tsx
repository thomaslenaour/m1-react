import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesWeatherContext } from './contexts/FavoritesWeather';

import Routes from './routes/Routes';

const App: FC = () => {
  return (
    <BrowserRouter>
      <FavoritesWeatherContext.Provider
        value={{
          cities: [],
          toggleCity: () => {
            console.log('yes');
          },
        }}
      >
        <Routes />
      </FavoritesWeatherContext.Provider>
    </BrowserRouter>
  );
};

export default App;
