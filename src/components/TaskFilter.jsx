// src/components/TaskFilter.js
import React from "react";
import useStore from "../useStore";

function TaskFilter() {
  const { filter, setFilter } = useStore();

  return (
    <div>
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        disabled={filter === "active"}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        disabled={filter === "completed"}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;
