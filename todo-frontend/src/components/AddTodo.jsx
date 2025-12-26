import { useState } from "react";
import React from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddButtonClicked = () => {
    if (todoName.trim()) {
      onNewItem(todoName, dueDate);
      setDueDate("");
      setTodoName("");
    }
  };

  return (
    <div className="mb-10">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Todo Here"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          className="grow px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400"
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-md text-gray-400 focus:outline-none"
        />

        <button
          onClick={handleAddButtonClicked}
          className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-6 py-2 rounded-md font-medium transition"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;