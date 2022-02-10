import { render, screen } from '@testing-library/react';

import SeasonCard, { SeasonCardProps } from './SeasonCard';
import { UNSPLASH_IMAGE_URL } from '../types';
import { getSeasonsData } from '../utils';

describe('SeasonCard', () => {
  const currentDate = new Date();
  const { currentSeason, nextSeason } = getSeasonsData(currentDate);

  const seasonCardData: SeasonCardProps = {
    ...currentSeason,
    currentDate,
    imageUrl: `${UNSPLASH_IMAGE_URL}/?winter`,
  };

  const nextSeasonCardData: SeasonCardProps = {
    ...nextSeason,
    currentDate,
    imageUrl: `${UNSPLASH_IMAGE_URL}/?spring`,
    isNextSeason: true,
  };

  it('should render a season card', () => {
    render(<SeasonCard {...seasonCardData} />);
    const imgAlt = screen.getByAltText(currentSeason.name);
    const cardTitle = screen.getByText(/^We're currently./i);
    expect(imgAlt).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
  });

  it('should render a season card with next season', () => {
    render(<SeasonCard {...nextSeasonCardData} />);
    const imgAlt = screen.getByAltText(nextSeasonCardData.name);
    const cardTitle = screen.getByText(/^We will be./i);
    expect(imgAlt).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
  });
});
