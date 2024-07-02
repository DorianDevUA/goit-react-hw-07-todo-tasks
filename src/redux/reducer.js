import { combineReducers } from 'redux';
import tasksReducer from './tasks/reducer';
import filtersReducer from './filters/reducer';

// const initialState = {
//   tasks: [
//     { id: 0, title: 'Learn HTML and CSS', completed: true },
//     { id: 1, title: 'Get good at JavaScript', completed: true },
//     { id: 2, title: 'Master React', completed: false },
//     { id: 3, title: 'Discover Redux', completed: false },
//     { id: 4, title: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: statusFilters.all,
//   },
// };

// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'tasks/addTask':
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };
//     case 'tasks/deleteTask':
//       return {
//         ...state,
//         tasks: state.tasks.filter(task => task.id !== action.payload),
//       };
//     case 'tasks/toggleCompleted':
//       return {
//         ...state,
//         tasks: state.tasks.map(task => {
//           if (task.id !== action.payload) {
//             return task;
//           }

//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// // Код редюсерів tasksReducer та filtersReducer
// export const rootReducer = (state = {}, action) => {
//   // Повертаємо об'єкт стану
//   return {
//     // Обом редюсерам передаємо тільки частину стану, за яку вони відповідають.
//     tasks: tasksReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };

// Імпортуємо функцію композиції редюсерів
// Код редюсерів tasksReducer та filtersReducer

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

export default rootReducer;
