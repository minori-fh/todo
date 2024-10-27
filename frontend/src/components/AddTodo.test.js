import { render, screen, fireEvent } from "@testing-library/react";
import AddTodo from "./AddTodo";

test("renders AddTodo component", () => {
  render(<AddTodo />);

  const titleInput = screen.getByPlaceholderText("Title");
  const descriptionInput = screen.getByPlaceholderText("Description");
  const addButton = screen.getByText("Add Todo");

  expect(titleInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test("calls onAdd function with correct values when form is submitted", () => {
  const mockOnAdd = jest.fn();
  render(<AddTodo onAdd={mockOnAdd} />);

  const titleInput = screen.getByPlaceholderText("Title");
  const descriptionInput = screen.getByPlaceholderText("Description");
  const addButton = screen.getByText("Add Todo");

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
