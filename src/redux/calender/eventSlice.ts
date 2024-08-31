import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CalendarEvent {
  id: string;
  name: string;  // Added name field
  startDate: string;
  endDate: string;
}

interface EventsState {
  events: CalendarEvent[];
}

const initialState: EventsState = {
  events: [
    {
      id: '1',
      name: 'Meeting with team',
      startDate: '2024-08-30T09:00:00',
      endDate: '2024-08-30T10:00:00',
    },
    {
      id: '2',
      name: 'Project deadline',
      startDate: '2024-09-01T13:00:00',
      endDate: '2024-09-01T14:00:00',
    },
    {
      id: '3',
      name: 'Client presentation',
      startDate: '2024-09-05T15:00:00',
      endDate: '2024-09-05T16:00:00',
    },
  ],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<CalendarEvent>) => {
      state.events.push(action.payload);
    },
    updateEvent: (state, action: PayloadAction<CalendarEvent>) => {
      const index = state.events.findIndex(event => event.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
      }
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
  },
});

export const { addEvent, updateEvent, deleteEvent } = eventsSlice.actions;

export default eventsSlice.reducer;