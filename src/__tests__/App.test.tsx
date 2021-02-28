import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App/App';

test('renders App in document', () => {
  render(<App />);
  expect(screen.getByTestId('App')).toBeInTheDocument();
});
