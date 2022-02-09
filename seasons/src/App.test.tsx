import { render, screen } from '@testing-library/react';

import App from './App';

test('renders title app', () => {
  render(<App />);
  const title = screen.getByText(/Season App/i);
  expect(title).toBeInTheDocument();
});
