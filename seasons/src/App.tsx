import { FC, useState } from 'react';
import { format } from 'date-fns';

import SeasonCard, { SeasonCardProps } from './components/SeasonCard';
import SeasonModal from './components/SeasonModal';
import Button from './components/Button';
import TogglerButton from './components/TogglerButton';

import ThemeProvider from './context/ThemeProvider';

import { getSeasonsData } from './utils';
import { UNSPLASH_IMAGE_URL } from './types';

const App: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const currentDate = new Date();
  const { currentSeason, nextSeason } = getSeasonsData(currentDate);
  const currentSeasonData: SeasonCardProps = {
    ...currentSeason,
    currentDate,
    imageUrl: `${UNSPLASH_IMAGE_URL}/?${currentSeason.name}`,
  };
  const nextSeasonData: SeasonCardProps = {
    ...nextSeason,
    currentDate,
    imageUrl: `${UNSPLASH_IMAGE_URL}/?${nextSeason.name}`,
    isNextSeason: true,
  };

  return (
    <ThemeProvider>
      <div className="dark:bg-slate-900 dark:text-white">
        <div className="main-container">
          <div className="flex flex-col justify-center items-center w-full h-screen">
            <div className="flex flex-col items-center mb-10">
              <h1 className="font-bold text-4xl mb-5">Season App</h1>
              <p className="text-gray-500 font-medium text-lg">
                {format(currentDate, 'PPPP')}
              </p>
            </div>
            <SeasonCard {...currentSeasonData} />
            <h3 className="font-medium text-2xl mt-10 mb-5">
              Want to see more ?
            </h3>
            <Button
              type="button"
              onClick={() => setModalIsOpen(true)}
              label="Check the next season"
              classNames="bg-blue-400 hover:bg-blue-500 text-white"
            />
            {modalIsOpen && (
              <SeasonModal
                closeModal={() => setModalIsOpen(false)}
                seasonCardData={nextSeasonData}
              />
            )}
          </div>
        </div>

        <div className="absolute top-0 left-0">
          <TogglerButton />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
