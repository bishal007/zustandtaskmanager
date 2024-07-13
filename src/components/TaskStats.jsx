// src/components/TaskStats.js
import React from "react";

function TaskStats({ stats }) {
  return (
    <div>
      <p>Total tasks: {stats.total}</p>
      <p>Active tasks: {stats.active}</p>
      <p>Completed tasks: {stats.completed}</p>
    </div>
  );
}

export default TaskStats;
