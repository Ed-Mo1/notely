import { createSlice } from "@reduxjs/toolkit";

const openUpdateSlice = createSlice({
  name: "updateNote",
  initialState: {
    time: "",
    isOpen: false,
  },
  reducers: {
    isOpen(state) {
       state.isOpen ? (state.isOpen = false) : (state.isOpen = true);
    },
    setTime(state, action) {
      state.time = action.payload;
    },
  },
});

export const { isOpen, setTime } = openUpdateSlice.actions;
export default openUpdateSlice.reducer;
