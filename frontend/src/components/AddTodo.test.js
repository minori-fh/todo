import { render, screen, fireEvent } from "@testing-library/react";
import AddTodo from "./AddTodo";

// frontend/src/components/AddTodo.test.js

test("renders AddTodo form", () => {
  render(<AddTodo onAdd={() => {}} />);
  expect(screen.getByPlaceholderText(/Title/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Description/i)).toBeInTheDocument();
  expect(screen.getByText(/Add Todo/i)).toBeInTheDocument();
});

test("calls onAdd with correct data when form is submitted", () => {
  const mockOnAdd = jest.fn();
  render(<AddTodo onAdd={mockOnAdd} />);

  fireEvent.change(screen.getByPlaceholderText(/Title/i), {
    target: { value: "Test Title" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Description/i), {
    target: { value: "Test Description" },
  });
  fireEvent.click(screen.getByText(/Add Todo/i));

  expect(mockOnAdd).toHaveBeenCalledWith({
    title: "Test Title",
    description: "Test Description",
  });
});

test("clears input fields after form submission", () => {
  render(<AddTodo onAdd={() => {}} />);

  const titleInput = screen.getByPlaceholderText(/Title/i);
  const descriptionInput = screen.getByPlaceholderText(/Description/i);

  fireEvent.change(titleInput, { target: { value: "Test Title" } });
  fireEvent.change(descriptionInput, { target: { value: "Test Description" } });
  fireEvent.click(screen.getByText(/Add Todo/i));

  expect(titleInput.value).toBe("");
  expect(descriptionInput.value).toBe("");
});
