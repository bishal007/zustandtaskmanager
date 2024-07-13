// src/components/TaskSearch.js
import React from "react";
import useStore from "../useStore";

function TaskSearch() {
  const { searchQuery, setSearchQuery } = useStore();

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search tasks"
    />
  );
}

export default TaskSearch;
