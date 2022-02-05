export enum Season {
  Spring = 'Spring',
  Summer = 'Summer',
  Autumn = 'Autumn',
  Winter = 'Winter',
}

export type SeasonsStartDates = {
  [key in keyof typeof Season]: Date;
};

export type SeasonName = `${Season}`;

export interface SeasonsData {
  currentSeason: SeasonData;
  nextSeason: SeasonData;
}

export interface SeasonData {
  name: SeasonName;
  startDate: Date;
}
