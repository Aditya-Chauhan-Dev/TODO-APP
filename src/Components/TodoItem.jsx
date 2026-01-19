export function TodoItem({ todo, onEdit, onDelete }) {
  return (
    <li className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg">
      <span className="text-gray-700">{todo.text}</span>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(todo)}
          className="text-sm px-2 py-1 rounded bg-yellow-400 hover:bg-yellow-500 text-white"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-sm px-2 py-1 rounded bg-red-500 hover:bg-red-600 text-white"
        >
          Delete
        </button>
      </div>
    </li>
  );
}