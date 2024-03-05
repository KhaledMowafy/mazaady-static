import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoCard from './InfoCard';

describe('InfoCard component', () => {
  test('renders info card with given props', () => {
    render(
      <InfoCard
        img="/path/to/image.jpg"
        Bnumber="123"
        Snumber="456"
        text="Lorem ipsum"
        textClassName="custom-class"
      />
    );

    const BnumberElement = screen.getByText('123');
    expect(BnumberElement).toBeInTheDocument();

    const SnumberElement = screen.getByText('(456)');
    expect(SnumberElement).toBeInTheDocument();

    const textElement = screen.getByText('Lorem ipsum');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass('custom-class');
  });

  test('renders info card without optional props', () => {
    render(<InfoCard text="Lorem ipsum" />);

    const textElement = screen.getByText('Lorem ipsum');
    expect(textElement).toBeInTheDocument();
  });

  test('renders info card without image', () => {
    render(<InfoCard text="Lorem ipsum" />);

    const imageElement = screen.queryByAltText('Lorem ipsum');
    expect(imageElement).toBeNull();
  });
});
