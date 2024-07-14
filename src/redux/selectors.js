import { statusFilters } from 'constants';
import { createSelector } from 'reselect';

export const selectTasks = state => state.tasks.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectStatusFilter = state => state.filters.status;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    // Використовуємо інші селектори
    // const tasks = selectTasks(state);
    // const statusFilter = selectStatusFilter(state);

    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  },
);

// Мемоізований селектор для підрахунку завдань
export const selectTaskCount = createSelector([selectTasks], tasks => {
  // console.log('Calculating task count. Now memoized!');
  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      count.all += 1;
      return count;
    },
    { all: 0, active: 0, completed: 0 },
  );
});

// export const selectTaskCount = state => {
//   const tasks = selectTasks(state);
//   console.log('Calculating task count');

//   return tasks.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed += 1;
//       } else {
//         count.active += 1;
//       }
//       count.all += 1;
//       return count;
//     },
//     { all: 0, active: 0, completed: 0 },
//   );
// };
