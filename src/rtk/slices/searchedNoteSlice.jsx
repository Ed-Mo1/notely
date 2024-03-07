import { createSlice } from "@reduxjs/toolkit";

const searchedNote = createSlice({
  name: "searchedNote",
  initialState: "",
  reducers: {
    setSearchValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const {  setSearchValue } = searchedNote.actions;
export default searchedNote.reducer;
