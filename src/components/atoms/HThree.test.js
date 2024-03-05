import React from 'react';
import { render, screen } from '@testing-library/react';
import HThree from './HThree';

describe('HThree component', () => {
  test('renders heading with children', () => {
    render(<HThree>Hello World</HThree>);
    const headingElement = screen.getByText('Hello World');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H3');
    expect(headingElement).toHaveClass('font-bold text-blackish text-2xl');
  });
});
