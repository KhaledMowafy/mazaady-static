import React from 'react';
import { render, screen } from '@testing-library/react';
import HOne from './HOne';

describe('HOne component', () => {
  test('renders heading with children', () => {
    render(<HOne>Hello World</HOne>);
    const headingElement = screen.getByText('Hello World');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H1');
    expect(headingElement).toHaveClass('text-3xl font-extrabold');
  });
});
