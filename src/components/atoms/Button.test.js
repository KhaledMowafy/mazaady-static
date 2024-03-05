import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('renders button with default props', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('bg-gradient-to-r from-pink to-yellow rounded-xl px-8 py-2 text-white text-sm w-full');
  });

  test('renders button with additional className', () => {
    render(<Button className="my-custom-class">Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('bg-gradient-to-r from-pink to-yellow rounded-xl text-white text-sm w-full my-custom-class');
  });
});
