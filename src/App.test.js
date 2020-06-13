import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('button renders without crashing', () => {
  const { getByTestId } = render(<App />);
  const buttonElement = getByTestId('button-new');
  expect(buttonElement).toBeInTheDocument()
});

test('button has text content', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('button-new')).toHaveTextContent('Add new')
});
