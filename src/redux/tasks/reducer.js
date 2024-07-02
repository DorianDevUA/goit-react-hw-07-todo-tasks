const tasksInitialState = [
  { id: 0, title: 'Learn HTML and CSS', completed: true },
  { id: 1, title: 'Get good at JavaScript', completed: true },
  { id: 2, title: 'Master React', completed: false },
  { id: 3, title: 'Discover Redux', completed: false },
  { id: 4, title: 'Build amazing apps', completed: false },
];

export const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return [...state, action.payload];

    case 'tasks/deleteTask':
      return state.filter(task => task.id !== action.payload);

    case 'tasks/toggleCompleted':
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }

        return {
          ...task,
          completed: !task.completed,
        };
      });

    default:
      return state;
  }
};
