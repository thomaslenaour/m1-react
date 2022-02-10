import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('should render a button', () => {
    render(
      <Button
        label="My super button"
        type="button"
        onClick={() => console.log('clicked!')}
      />,
    );
    const btnText = screen.getByText('My super button');
    expect(btnText).toBeInTheDocument();
  });

  it('should click on the button', () => {
    const mockCallback = jest.fn();
    render(
      <Button label="My super button" type="button" onClick={mockCallback} />,
    );
    fireEvent.click(screen.getByText('My super button'));
    expect(mockCallback).toHaveBeenCalled();
  });
});
