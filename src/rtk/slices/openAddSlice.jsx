import { createSlice } from "@reduxjs/toolkit";

const openAddSlice = createSlice({
  name: "openAdd",
  initialState: false,
  reducers: {
    isOpen(state) {
      return !state
    },
  },
});

export const { isOpen } = openAddSlice.actions;
export default openAddSlice.reducer;
