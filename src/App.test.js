import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it('app renders without crashing', () => {
  const { getByTestId } = render(<App />);
});
