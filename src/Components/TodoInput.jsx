import { useState } from "react";

export function TodoInput({ onAdd, editTodo }) {
  const [input, setInput] = useState(editTodo?.text || "");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onAdd(input);
    setInput("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your task"
        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        onClick={handleSubmit}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 rounded-lg"
      >
        {editTodo ? "Update" : "Add"}
      </button>
    </div>
  );
}
