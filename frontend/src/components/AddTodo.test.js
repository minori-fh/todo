import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddTodo from '../components/AddTodo';

test('renders AddTodo component', () => {
  const { getByText, getByPlaceholderText } = render(<AddTodo />);
  
  // Test case 1: Check if the component renders correctly
  const addTodoText = getByText('Add Todo');
  expect(addTodoText).toBeInTheDocument();

  // Test case 2: Check if the input field is rendered correctly
  const inputField = getByPlaceholderText('Enter todo');
  expect(inputField).toBeInTheDocument();

  // Test case 3: Check if the button is rendered correctly
  const addButton = getByText('Add');
  expect(addButton).toBeInTheDocument();
});

test('adds todo when Add button is clicked', () => {
  const { getByText, getByPlaceholderText } = render(<AddTodo />);
  
  // Test case 4: Check if the todo is added when Add button is clicked
  const inputField = getByPlaceholderText('Enter todo');
  const addButton = getByText('Add');

  fireEvent.change(inputField, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  const addedTodo = getByText('New Todo');
  expect(addedTodo).toBeInTheDocument();
});