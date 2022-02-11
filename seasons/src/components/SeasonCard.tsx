import { FC } from 'react';
import {
  differenceInDays,
  formatDistance,
  formatDistanceToNow,
} from 'date-fns';

import { SeasonData } from '../types';

export interface SeasonCardProps extends SeasonData {
  currentDate: Date;
  imageUrl: string;
  isNextSeason?: boolean;
}

const SeasonCard: FC<SeasonCardProps> = ({
  name,
  startDate,
  imageUrl,
  currentDate,
  isNextSeason = false,
}) => {
  const timeDiff = isNextSeason
    ? formatDistanceToNow(startDate, { addSuffix: true })
    : formatDistance(startDate, currentDate, {
        addSuffix: true,
      });
  const dayDiff = Math.abs(differenceInDays(startDate, currentDate));

  return (
    <div
      className={`rounded-md shadow-lg dark:bg-slate-800 dark:border dark:border-slate-900 dark:text-white max-w-sm${
        isNextSeason ? ' bg-white' : ' border'
      }`}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-52 object-cover rounded-tr-md rounded-tl-md"
      />
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">
          {isNextSeason ? 'We will be' : "We're currently"} in{' '}
          <span className="text-blue-500">{name}</span>
        </h2>
        <p className="text-gray-500">
          The season {isNextSeason ? 'will start' : 'has started'} {timeDiff},
          more precisely {dayDiff} days.
        </p>
      </div>
    </div>
  );
};

export default SeasonCard;
