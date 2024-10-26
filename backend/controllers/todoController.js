// backend/controllers/todoController.js
const Todo = require("../models/todo");

// Get all todos
exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// Create a new todo
exports.createTodo = async (req, res) => {
  const { title, description } = req.body;
  const newTodo = new Todo({
    title,
    description,
  });
  await newTodo.save();
  res.json(newTodo);
};

// Update an existing todo
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { title, description, completed },
    { new: true }
  );
  res.json(updatedTodo);
};

// delete to do item
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Todo deleted successfully" });
};
