import React, { useEffect, useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { Addtoserver, deletetodoitem, GetItemsFromServer, MarkItemOnServer } from "./services/todoserver";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    GetItemsFromServer().then(Initialitems => {
      setTodoItems(Initialitems);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    const items = await Addtoserver(itemName, itemDueDate);
    setTodoItems([...todoItems, items]);
  };

  const handleDeleteItem = async (id) => {
    const deleteId = await deletetodoitem(id);
    setTodoItems(todoItems.filter((item) => item.id !== deleteId));
  };

  const handleToggleComplete = async (id) => {
    // Optimistic UI Update
    setTodoItems(todoItems.map((it) =>
      it.id === id ? { ...it, completed: true } : it
    ));

    try {
      await MarkItemOnServer(id);
    } catch (err) {
      console.error('Failed to update server', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex justify-center items-start pt-20 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm p-10">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />

        {todoItems.length === 0 && <WelcomeMessage />}

        <div className="space-y-8">
          {/* Tasks to Do Section */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-700"></h2>
            <TodoItems
              todoItems={todoItems.filter((i) => !i.completed)}
              onDeleteClick={handleDeleteItem}
              onToggleComplete={handleToggleComplete}
            />
          </section>

          {/* Completed Tasks Section */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-500"></h2>
            <TodoItems
              todoItems={todoItems.filter((i) => i.completed)}
              onDeleteClick={handleDeleteItem}
              onToggleComplete={null}
              isCompletedList={true}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;