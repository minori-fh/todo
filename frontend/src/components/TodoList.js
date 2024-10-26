import React from "react";

const TodoList = ({ todos, onUpdate, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo) => (
        <tr key={todo._id}>
          <td>{todo.title}</td>
          <td>{todo.description}</td>
          <td>
            <button
              onClick={() =>
                onUpdate(todo._id, { ...todo, completed: !todo.completed })
              }
            >
              {todo.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => onDelete(todo._id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TodoList;
