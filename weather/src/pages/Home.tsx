import { ChangeEvent, FC, MouseEvent, useState } from 'react';

import Button from '../components/Button';
import Input from '../components/Input';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import WeatherCard, { WeatherCardProps } from '../components/WeatherCard';
import { getWeatherLocation } from '../services/weather.service';

const Home: FC = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<WeatherCardProps | null>(
    null,
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.currentTarget.value);
  };

  const handleSearchSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!searchInputValue.trim()) {
      setSearchInputValue('');
      return;
    }

    setSearchIsLoading(true);

    // call api here
    const data = await getWeatherLocation(searchInputValue);
    if (data) setSearchResult(data);

    setSearchIsLoading(false);
    setSearchInputValue('');
  };

  return (
    <Layout>
      <main className="py-10 main-container">
        <section>
          <h2 className="font-bold text-2xl mb-2">What weather is it today?</h2>
          <Input
            type="text"
            placeholder="London"
            value={searchInputValue}
            onChange={handleSearchChange}
            classes="w-full px-3 py-2 border rounded-md mb-3"
          />
          <Button
            type="submit"
            onClick={handleSearchSubmit}
            label="Search"
            classes="bg-blue-600 text-white font-bold w-full rounded py-2 px-3 hover:bg-blue-500"
          />
        </section>
        {searchIsLoading && (
          <div className="mt-3 flex justify-center">
            <Spinner />
          </div>
        )}
        {searchResult && !searchIsLoading && (
          <div className="mt-3">
            <WeatherCard {...searchResult} />
          </div>
        )}
      </main>
    </Layout>
  );
};

export default Home;
