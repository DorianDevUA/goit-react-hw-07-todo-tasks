import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const initialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload.status;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;

export const getStatusFilter = state => state.filters.status;

export default filtersSlice.reducer;
