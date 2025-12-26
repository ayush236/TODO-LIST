import TodoItem from "./TodoItem";
import React from "react";

const TodoItems = ({ todoItems, onDeleteClick, onToggleComplete, isCompletedList }) => {
  return (
    <div className="space-y-1">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
          onToggleComplete={onToggleComplete}
          isCompleted={!!item.completed}
          isCompletedList={isCompletedList}
        />
      ))}
    </div>
  );
};

export default TodoItems;