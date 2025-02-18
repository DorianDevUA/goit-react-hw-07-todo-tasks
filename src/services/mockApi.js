import axios from 'axios';

axios.defaults.baseURL = 'https://66929c95346eeafcf46d9198.mockapi.io/api/v1';

export const fetchAllTasks = async (_, thunkAPI) => {
  try {
    const response = await axios.get('/tasks');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const addTask = async (title, thunkAPI) => {
  try {
    const response = await axios.post('/tasks', { title });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const deleteTask = async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const toggleCompletedTask = async (task, thunkAPI) => {
  try {
    const response = await axios.put(`/tasks/${task.id}`, {
      completed: !task.completed,
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};
