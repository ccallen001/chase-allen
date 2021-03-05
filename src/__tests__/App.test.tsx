import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app/App';

test('renders App in document', () => {
  render(<App />);
  expect(screen.getByTestId('App')).toBeInTheDocument();
});
