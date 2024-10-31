import { render, screen, fireEvent } from "@testing-library/react";
import AddTodo from "./AddTodo";

// frontend/src/components/AddTodo.test.js

test("renders AddTodo form", () => {
  render(<AddTodo onAdd={jest.fn()} />);
  const titleInput = screen.getByPlaceholderText(/title/i);
  const descriptionInput = screen.getByPlaceholderText(/description/i);
  const addButton = screen.getByText(/add todo/i);

  expect(titleInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test("calls onAdd with correct data when form is submitted", () => {
  const mockOnAdd = jest.fn();
  render(<AddTodo onAdd={mockOnAdd} />);

  const titleInput = screen.getByPlaceholderText(/title/i);
  const descriptionInput = screen.getByPlaceholderText(/description/i);
  const addButton = screen.getByText(/add todo/i);

  fireEvent.change(titleInput, { target: { value: "Test Title" } });
  fireEvent.change(descriptionInput, { target: { value: "Test Description" } });
  fireEvent.click(addButton);

  expect(mockOnAdd).toHaveBeenCalledWith({
    title: "Test Title",
    description: "Test Description",
  });
  expect(titleInput.value).toBe("");
  expect(descriptionInput.value).toBe("");
});
