import { combineReducers } from 'redux';
import { tasksReducer } from './tasks/reducer';
import { filtersReducer } from './filters/reducer';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
