import React from "react";

function TodoItem({ id, todoName, todoDate, onDeleteClick, onToggleComplete, isCompleted }) {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-50 last:border-0">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={!!isCompleted}
          onChange={() => onToggleComplete && onToggleComplete(id)}
          className="w-5 h-5 rounded border-gray-300 accent-[#6366f1]"
        />
        <span className={`text-base ${isCompleted ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
          {todoName}
        </span>
      </div>

      <div className="flex items-center space-x-12">
        <span className="text-sm text-gray-400">
           {todoDate ? new Date(todoDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
        </span>
        <button
          className="bg-[#ef4444] hover:bg-red-600 text-white text-sm px-4 py-1.5 rounded-md transition"
          onClick={() => onDeleteClick(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;