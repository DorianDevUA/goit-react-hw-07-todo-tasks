import { nanoid } from 'nanoid';

export const addTask = title => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      title,
      completed: false,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

export const setStatusFilter = status => {
  return {
    type: 'filters/setStatusFilter',
    payload: status,
  };
};
