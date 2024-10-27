import { render, screen, fireEvent } from "@testing-library/react";
import AddTodo from "./AddTodo";

test("renders AddTodo component", () => {
  render(<AddTodo />);

  const titleInput = screen.getByPlaceholderText(/Title/i);
  const descriptionInput = screen.getByPlaceholderText(/Description/i);
  const addButton = screen.getByText(/Add Todo/i);

  expect(titleInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test("calls onAdd function with correct values when form is submitted", () => {
  const mockOnAdd = jest.fn();
  render(<AddTodo onAdd={mockOnAdd} />);

  const titleInput = screen.getByPlaceholderText(/Title/i);
  const descriptionInput = screen.getByPlaceholderText(/Description/i);
  const addButton = screen.getByText(/Add Todo/i);

  const titleValue = "Test Title";
  const descriptionValue = "Test Description";

  fireEvent.change(titleInput, { target: { value: titleValue } });
  fireEvent.change(descriptionInput, { target: { value: descriptionValue } });
  fireEvent.click(addButton);

  expect(mockOnAdd).toHaveBeenCalledWith({
    title: titleValue,
    description: descriptionValue,
  });
});
