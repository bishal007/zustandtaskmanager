// src/store.js
import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      tasks: [],
      filter: "all",
      searchQuery: "",

      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, { ...task, id: Date.now() }],
        })),

      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      toggleTaskStatus: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),

      setFilter: (filter) => set({ filter }),

      setSearchQuery: (query) => set({ searchQuery: query }),

      getFilteredTasks: () => {
        const { tasks, filter, searchQuery } = get();
        return tasks
          .filter((task) => {
            if (filter === "active") return !task.completed;
            if (filter === "completed") return task.completed;
            return true;
          })
          .filter((task) =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
      },

      getTaskStats: () => {
        const { tasks } = get();
        const total = tasks.length;
        const completed = tasks.filter((task) => task.completed).length;
        const active = total - completed;
        return { total, completed, active };
      },
    }),
    {
      name: "task-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
