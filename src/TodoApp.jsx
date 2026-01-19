import { useState } from "react";
import { TodoInput } from "./Components/TodoInput";
import { TodoList } from "./Components/TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const handleAdd = (text) => {
    if (editTodo) {
      setTodos(
        todos.map((t) =>
          t.id === editTodo.id ? { ...t, text } : t
        )
      );
      setEditTodo(null);
    } else {
      setTodos([...todos, { id: Date.now(), text }]);
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          📝 Todo App
        </h1>

        <TodoInput onAdd={handleAdd} editTodo={editTodo} />
        <TodoList
          todos={todos}
          onEdit={setEditTodo}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
