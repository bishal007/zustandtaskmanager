// src/components/TaskList.js
import React from "react";
import useStore from "../useStore";

function TaskList({ tasks }) {
  const toggleTaskStatus = useStore((state) => state.toggleTaskStatus);
  const removeTask = useStore((state) => state.removeTask);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskStatus(task.id)}
          />
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.title}
          </span>
          <button onClick={() => removeTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
