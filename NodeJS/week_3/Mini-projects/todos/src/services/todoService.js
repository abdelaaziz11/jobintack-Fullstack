// 📁 services/todoService.js
// CRUD + filtres + pagination version MongoDB

const Todo = require("../models/todos.model.js");

const getAllTodos = async (query) => {
  const filter = {};

  // ✅ Filtrage par status
  if (query.status === "active") filter.completed = false;
  else if (query.status === "completed") filter.completed = true;

  // ✅ Filtrage par priorité
  if (query.priority) filter.priority = query.priority;

  // ✅ Recherche par titre
  if (query.q) filter.title = { $regex: query.q, $options: "i" }; // case-insensitive

  // ✅ Pagination
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;
  const skip = (page - 1) * limit;

  const total = await Todo.countDocuments(filter);
  const data = await Todo.find(filter).skip(skip).limit(limit).sort({ createdAt: -1 });

  return { total, page, limit, data };
};

const getTodoById = async (id) => {
  return await Todo.findById(id);
};

const createTodo = async (data) => {
  if (!data.title || data.title.trim() === "") {
    throw { status: 400, message: "Title khaso maykonch khawi" };
  }

  const newTodo = new Todo({
    title: data.title.trim(),
    completed: false,
    priority: data.priority || "medium",
    dueDate: data.dueDate || null,
  });

  return await newTodo.save();
};

const updateTodo = async (id, updates) => {
  const allowed = ["title", "completed", "priority", "dueDate"];
  for (let key of Object.keys(updates)) {
    if (!allowed.includes(key)) {
      throw { status: 400, message: `Champ "${key}" machi ma3rouf` };
    }
  }

  const updated = await Todo.findByIdAndUpdate(
    id,
    { ...updates },
    { new: true, runValidators: true }
  );

  return updated;
};

const deleteTodo = async (id) => {
  const result = await Todo.findByIdAndDelete(id);
  return !!result; // true if deleted, false if not found
};

const toggleTodo = async (id) => {
  const todo = await Todo.findById(id);
  if (!todo) return null;

  todo.completed = !todo.completed;
  await todo.save();
  return todo;
};


module.exports = { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo, toggleTodo };
