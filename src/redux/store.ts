import { configureStore } from '@reduxjs/toolkit';
import chartsReducer from './charts/chartsSlice';
import profileReducer from './profile/profileSlice';
import tasksReducer from './tasks/tasksSlice';
import tableReducer from './tables/tablesSlice';

const store = configureStore({
  reducer: {
    charts: chartsReducer,
    profile: profileReducer,
    tasks: tasksReducer,
    tables: tableReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
