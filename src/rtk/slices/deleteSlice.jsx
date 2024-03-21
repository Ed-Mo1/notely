import { createSlice } from "@reduxjs/toolkit";

const deleteSlice = createSlice({
  name: "deleteNote",
  initialState: {
    show: false,
    id: null,
  },
  reducers: {
    setShow(state) {
      state.show = !state.show;
    },
    setID(state, action) {
      state.id = action.payload;
    },
  },
});

export const { setShow, setID } = deleteSlice.actions;
export default deleteSlice.reducer