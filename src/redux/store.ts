import { configureStore } from '@reduxjs/toolkit';
import chartsReducer from './charts/chartsSlice';
import profileReducer from './profile/profileSlice';
import tasksReducer from './tasks/tasksSlice'

const store = configureStore({
  reducer: {
    charts: chartsReducer,
    profile: profileReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
