import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import TodoList from '.././todolist';

afterEach(cleanup);

it('renders without crashing and it has a button', () => {
  const { getByTestId } = render(<TodoList />);
  const button = getByTestId('button-new');
  expect(button).toBeInTheDocument()
});

it('click on a button and create a new list item', () => {
  const { getByTestId } = render(<TodoList />);
  fireEvent.change(getByTestId('input-text-box'), { target: { value: 'test item' } })
  fireEvent.click(getByTestId('button-new'))
  expect(screen.getByText('test item')).toBeTruthy()
});

it('list item click and strikethrough are working', () => {
  const { getByTestId } = render(<TodoList />);
  fireEvent.change(getByTestId('input-text-box'), { target: { value: 'test item 2' } })
  fireEvent.click(getByTestId('button-new'))
  fireEvent.click(screen.getByText('test item 2'))
  expect(screen.getByTestId('strikethrough')).toBeTruthy()
});
