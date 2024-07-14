import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllTasks,
  addTask,
  deleteTask,
  toggleCompletedTask,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, { payload }) => {
  return {
    ...state,
    error: payload,
    isLoading: false,
  };
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllTasks.pending, handlePending)
      .addCase(fetchAllTasks.fulfilled, (state, { payload }) => {
        return {
          ...state,
          items: payload,
          error: null,
          isLoading: false,
        };
      })
      .addCase(fetchAllTasks.rejected, handleRejected)

      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, { payload }) => {
        return {
          ...state,
          items: [...state.items, payload],
          error: null,
          isLoading: false,
        };
      })
      .addCase(addTask.rejected, handleRejected)

      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        return {
          ...state,
          items: state.items.filter(item => item.id !== payload.id),
          error: null,
          isLoading: false,
        };
      })
      .addCase(deleteTask.rejected, handleRejected)

      .addCase(toggleCompletedTask.pending, handlePending)
      .addCase(toggleCompletedTask.fulfilled, (state, { payload }) => {
        return {
          ...state,
          items: state.items.map(item => {
            if (item.id !== payload.id) {
              return item;
            }
            return payload;
          }),
          error: null,
          isLoading: false,
        };
      })
      .addCase(toggleCompletedTask.rejected, handleRejected);
  },
});

export default tasksSlice.reducer;
