import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  name: string;
  jobTitle: string;
  posts: number;
  followers: string;
  following: string;
  aboutMe: string;
}

const initialState: ProfileState = {
  name: 'Danish Heilium',
  jobTitle: 'UI/UX Designer',
  posts: 259,
  followers: '129K',
  following: '2K',
  aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis euismod turpis id tincidunt.',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setJobTitle(state, action: PayloadAction<string>) {
      state.jobTitle = action.payload;
    },
    setPosts(state, action: PayloadAction<number>) {
      state.posts = action.payload;
    },
    setFollowers(state, action: PayloadAction<string>) {
      state.followers = action.payload;
    },
    setFollowing(state, action: PayloadAction<string>) {
      state.following = action.payload;
    },
    setAboutMe(state, action: PayloadAction<string>) { // Add this reducer
      state.aboutMe = action.payload;
    },
  },
});

export const {
  setProfileName,
  setJobTitle,
  setPosts,
  setFollowers,
  setFollowing,
  setAboutMe, // Export the new action
} = profileSlice.actions;

export default profileSlice.reducer;