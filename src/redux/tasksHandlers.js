const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleFulfilled = state => {
  return {
    ...state,
    error: null,
    isLoading: false,
  };
};

const handleRejected = (state, { payload }) => {
  return {
    ...state,
    error: payload,
    isLoading: false,
  };
};

const handleFulfilledAllTasks = (state, { payload }) => {
  return {
    ...state,
    items: [...payload],
  };
};

const handleFullfildAddTask = (state, { payload }) => {
  return {
    ...state,
    items: [...state.items, payload],
  };
};

const handleFulfilledDeleteTask = (state, { payload }) => {
  return {
    ...state,
    items: state.items.filter(item => item.id !== payload.id),
  };
};

const handleFulfilledToggleCompletedTask = (state, { payload }) => {
  return {
    ...state,
    items: state.items.map(item => {
      if (item.id !== payload.id) {
        return item;
      }
      return {
        ...item,
        completed: !item.completed,
      };
    }),
  };
};

const taskHandlers = {
  handlePending,
  handleRejected,
  handleFulfilled,
  handleFulfilledAllTasks,
  handleFullfildAddTask,
  handleFulfilledDeleteTask,
  handleFulfilledToggleCompletedTask,
};

export default taskHandlers;
