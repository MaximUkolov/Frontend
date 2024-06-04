import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light', // или можно использовать true/false
  reducers: {
    toggleTheme: (state) => (state === 'light' ? 'dark' : 'light'),
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
