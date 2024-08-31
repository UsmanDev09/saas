import { configureStore } from '@reduxjs/toolkit';
import chartsReducer from './charts/chartsSlice';
import profileReducer from './profile/profileSlice';
import tasksReducer from './tasks/tasksSlice';
import tableReducer from './tables/tablesSlice';
import settingsReducer from './settings/settingsSlice';
import formReducer from './forms/formSlice';
import eventsReducer from './calender/eventSlice';

const store = configureStore({
  reducer: {
    charts: chartsReducer,
    profile: profileReducer,
    tasks: tasksReducer,
    tables: tableReducer,
    settings: settingsReducer,
    form: formReducer,
    events: eventsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
