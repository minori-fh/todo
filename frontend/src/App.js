// frontend/src/App.js
import React, { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { getTodos, createTodo, updateTodo, deleteTodo } from "./api";

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const { data } = await getTodos();
    setTodos(data);
  };

  const handleAddTodo = async (todo) => {
    const { data } = await createTodo(todo);
    setTodos([...todos, data]);
  };

  const handleUpdateTodo = async (id, updatedTodo) => {
    const { data } = await updateTodo(id, updatedTodo);
    setTodos(todos.map((todo) => (todo._id === id ? data : todo)));
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onUpdate={handleUpdateTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
};

export default App;
