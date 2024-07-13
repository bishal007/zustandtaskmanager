// src/components/TaskForm.js
import React, { useState } from "react";
import useStore from "../useStore";

function TaskForm() {
  const [title, setTitle] = useState("");
  const addTask = useStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ title, completed: false });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
