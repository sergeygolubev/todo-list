import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import AddButton from '.././button';

afterEach(cleanup);

it('button renders without crashing', () => {
  const { getByTestId } = render(<AddButton />);
  const button = getByTestId('button-new');
  expect(button).toBeInTheDocument()
});

it('button has a text content', () => {
  const { getByTestId } = render(<AddButton />);
  expect(getByTestId('button-new')).toHaveTextContent('Add new')
});

it('button handler works', () => {
  const addText = jest.fn();
  const { getByTestId } = render(<AddButton handler={addText}/>);
  fireEvent.click(getByTestId('button-new'));
  expect(addText.mock.calls.length).toBe(1);
});
