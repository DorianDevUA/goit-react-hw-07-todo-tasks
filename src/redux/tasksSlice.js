import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  { id: 0, title: 'Learn HTML and CSS', completed: true },
  { id: 1, title: 'Get good at JavaScript', completed: true },
  { id: 2, title: 'Master React', completed: false },
  { id: 3, title: 'Discover Redux', completed: false },
  { id: 4, title: 'Build amazing apps', completed: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, { payload }) {
      return [
        ...state,
        {
          id: nanoid(),
          title: payload.taskTitle,
          completed: false,
        },
      ];
    },
    deleteTask(state, action) {
      return state.filter(task => task.id !== action.payload.id);
    },
    toggleCompleted(state, action) {
      return state.map(task => {
        if (task.id !== action.payload.id) {
          return task;
        }
        return {
          ...task,
          completed: !task.completed,
        };
      });
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

export const getTasks = state => state.tasks;

export default tasksSlice.reducer;
