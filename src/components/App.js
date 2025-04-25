import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { TASKS, CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={(newTask) => setTasks([...tasks, newTask])}
      />

      <TaskList
        tasks={tasks.filter(
          (task) =>
            selectedCategory === "All" || task.category === selectedCategory
        )}
        onDeleteTask={(text) =>
          setTasks(tasks.filter((task) => task.text !== text))
        }
      />
    </div>
  );
}

export default App;
