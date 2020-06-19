import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import InputText from '.././input';

it('input renders without crashing', () => {
  const { getByTestId } = render(<InputText />);
  const input = getByTestId('input-text-box');
  expect(input).toBeInTheDocument()
});
