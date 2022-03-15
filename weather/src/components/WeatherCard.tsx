import { FC } from 'react';
import Button from './Button';

export interface WeatherCardProps {
  city: string;
  feelsLike: number;
  currentTemp: number;
  minTemp: number;
  maxTemp: number;
  pressure: number;
  windSpeed: number;
}

const WeatherCard: FC<WeatherCardProps & { onAddToFavorites: () => void }> = ({
  city,
  feelsLike,
  currentTemp,
  minTemp,
  maxTemp,
  pressure,
  windSpeed,
  onAddToFavorites,
}) => {
  const convertWindSpeedToKmH = (speed: number) =>
    parseFloat((speed * 3.6).toFixed());

  return (
    <div className="bg-white border shadow-sm rounded-md p-3">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-lg">{city}</h3>
        <p className="font-bold text-2xl">{currentTemp} °C</p>
      </div>
      <ul className="grid grid-cols-2 gap-4 text-sm">
        <li>
          <p className="font-medium">Feels</p>
          <span>{feelsLike} °C</span>
        </li>
        <li>
          <p className="font-medium">Temp. min.</p>
          <span>{minTemp} °C</span>
        </li>
        <li>
          <p className="font-medium">Temp. max.</p>
          <span>{maxTemp} °C</span>
        </li>
        <li>
          <p className="font-medium">Wind speed</p>
          <span>{convertWindSpeedToKmH(windSpeed)} km/h</span>
        </li>
        <li>
          <p className="font-medium">Pressure</p>
          <span>{pressure} hPa</span>
        </li>
      </ul>
      <Button
        type="button"
        label="+ Ajouter aux favoris"
        onClick={onAddToFavorites}
        classes="mt-3 w-full bg-indigo-500 font-medium text-white text-sm px-2 py-1 rounded-md"
      />
    </div>
  );
};

export default WeatherCard;
