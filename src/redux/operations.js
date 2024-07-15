import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  addTask,
  deleteTask,
  fetchAllTasks,
  toggleCompletedTask,
} from 'services/mockApi';

axios.defaults.baseURL = 'https://66929c95346eeafcf46d9198.mockapi.io/api/v1';

export const fetchAllTasksThunk = createAsyncThunk(
  'tasks/fetchAll',
  fetchAllTasks,
);

export const toggleCompletedTaskThunk = createAsyncThunk(
  'tasks/toggleCompleted',
  toggleCompletedTask,
);

export const addTaskThunk = createAsyncThunk('tasks/addTask', addTask);

export const deleteTaskThunk = createAsyncThunk('tasks/deleteTask', deleteTask);
