import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./modules/Home', () => () => <div data-testid="home-page" />);

test('renders home page', () => {
  render(<App />);
  const homePage = screen.getByTestId("home-page");
  expect(homePage).toBeInTheDocument();
});
