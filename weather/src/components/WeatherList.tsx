import { FC } from 'react';

import { WeatherCardProps } from './WeatherCard';

interface WeatherListProps {
  data: WeatherCardProps[];
}

const WeatherList: FC<WeatherListProps> = ({ data }) => {
  return <div>lolll</div>;
};

export default WeatherList;
