import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchAllTasksThunk,
  addTaskThunk,
  deleteTaskThunk,
  toggleCompletedTaskThunk,
} from './operations';
import taskHandlers from './tasksHandlers';

const {
  handlePending,
  handleRejected,
  handleFulfilled,
  handleFulfilledAllTasks,
  handleFullfildAddTask,
  handleFulfilledDeleteTask,
  handleFulfilledToggleCompletedTask,
} = taskHandlers;

const thunks = [
  fetchAllTasksThunk,
  addTaskThunk,
  deleteTaskThunk,
  toggleCompletedTaskThunk,
];

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const fn = type => thunks.map(thunk => thunk[type]);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(fetchAllTasksThunk.fulfilled, handleFulfilledAllTasks)
      .addCase(addTaskThunk.fulfilled, handleFullfildAddTask)
      .addCase(deleteTaskThunk.fulfilled, handleFulfilledDeleteTask)
      .addCase(
        toggleCompletedTaskThunk.fulfilled,
        handleFulfilledToggleCompletedTask,
      )
      .addMatcher(isAnyOf(...fn(PENDING)), handlePending)
      .addMatcher(isAnyOf(...fn(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...fn(REJECTED)), handleRejected);
  },
});

export default tasksSlice.reducer;
