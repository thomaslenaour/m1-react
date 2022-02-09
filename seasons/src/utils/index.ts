import { isLeapYear } from 'date-fns';
import {
  NextSeason,
  Season,
  SeasonData,
  SeasonName,
  SeasonsData,
  SeasonsStartDates,
} from '../types';

const generateSeasonDates = (
  yearIsLeap: boolean,
  currentYear: number,
): SeasonsStartDates => {
  return {
    Spring: new Date(currentYear, 2, yearIsLeap ? 19 : 21),
    Summer: new Date(currentYear, 5, yearIsLeap ? 20 : 21),
    Autumn: new Date(currentYear, 8, yearIsLeap ? 22 : 23),
    Winter: new Date(currentYear, 11, yearIsLeap ? 20 : 21),
  };
};

export const getSeasonsData = (currentDate: Date): SeasonsData => {
  let currentSeason: SeasonData;
  let nextSeason: SeasonData;
  const year = currentDate.getFullYear();
  const yearIsLeap = isLeapYear(year);
  const seasonStartDates = generateSeasonDates(yearIsLeap, year);

  const validSeasons = Object.entries(seasonStartDates).filter(
    // eslint-disable-next-line
    ([_, startDate]) => startDate <= currentDate,
  );

  if (!validSeasons.length) {
    // specific case for winter because it can starts last year
    currentSeason = {
      name: Season.Winter,
      startDate: new Date(year - 1, 11, isLeapYear(year - 1) ? 20 : 21),
    };
  } else {
    const currentSeasonName = validSeasons.slice(-1)[0][0] as SeasonName;

    currentSeason = {
      name: currentSeasonName,
      startDate: seasonStartDates[currentSeasonName],
    };
  }

  if (
    currentSeason.name === Season.Winter &&
    currentDate >= seasonStartDates[Season.Winter]
  ) {
    // specific case for spring next year when current season is winter
    nextSeason = {
      name: Season.Spring,
      startDate: new Date(year + 1, 2, isLeapYear(year + 1) ? 19 : 21),
    };
  } else {
    const nextSeasonName = NextSeason[currentSeason.name];

    nextSeason = {
      name: nextSeasonName,
      startDate: seasonStartDates[nextSeasonName],
    };
  }

  return { currentSeason, nextSeason };
};
