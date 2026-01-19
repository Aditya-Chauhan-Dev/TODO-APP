import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onEdit, onDelete }) {
  if (todos.length === 0) {
    return <p className="text-center text-gray-400">No tasks yet</p>;
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
