import { createSlice } from "@reduxjs/toolkit";

const completedNotes = createSlice({
  name: "completedNotes",
  initialState: false,
  reducers: {
    showCompleted(state) {
      return !state;
    },
  },
});
export const { showCompleted } = completedNotes.actions;
export default completedNotes.reducer;
