// src/App.js
import React from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import TaskSearch from "./components/TaskSearch";
import TaskStats from "./components/TaskStats";
import useStore from "./useStore";

function App() {
  const { getFilteredTasks, getTaskStats } = useStore();

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskFilter />
      <TaskSearch />
      <TaskStats stats={getTaskStats()} />
      <TaskList tasks={getFilteredTasks()} />
    </div>
  );
}

export default App;
