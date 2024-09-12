import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  username: string;
  bio: string;
}

const initialState: SettingsState = {
  fullName: 'Devid Jhon',
  phoneNumber: '+990 3343 7865',
  emailAddress: 'devidjond45@gmail.com',
  username: 'devidjhon24',
  bio: '',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setEmailAddress: (state, action: PayloadAction<string>) => {
      state.emailAddress = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setBio: (state, action: PayloadAction<string>) => {
      state.bio = action.payload;
    },
  },
});

export const { setFullName, setPhoneNumber, setEmailAddress, setUsername, setBio } = settingsSlice.actions;

export default settingsSlice.reducer;