import { render, screen, fireEvent } from "@testing-library/react";
import AddTodo from "./AddTodo";

// frontend/src/components/AddTodo.test.js

test("renders AddTodo form", () => {
  render(<AddTodo onAdd={jest.fn()} />);
  expect(screen.getByPlaceholderText(/Title/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Description/i)).toBeInTheDocument();
  expect(screen.getByText(/Add Todo/i)).toBeInTheDocument();
});

test("calls onAdd with correct data when form is submitted", () => {
  const onAddMock = jest.fn();
  render(<AddTodo onAdd={onAddMock} />);

  fireEvent.change(screen.getByPlaceholderText(/Title/i), {
    target: { value: "Test Title" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Description/i), {
    target: { value: "Test Description" },
  });
  fireEvent.click(screen.getByText(/Add Todo/i));

  expect(onAddMock).toHaveBeenCalledWith({
    title: "Test Title",
    description: "Test Description",
  });
  expect(screen.getByPlaceholderText(/Title/i).value).toBe("");
  expect(screen.getByPlaceholderText(/Description/i).value).toBe("");
});
