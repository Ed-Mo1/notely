import { createSlice } from "@reduxjs/toolkit";

const deleteSlice = createSlice({
  name: "deleteNote",
  initialState: {
    show: false,
    item: null,
  },
  reducers: {
    setShow(state) {
      state.show = !state.show;
    },
    setDelete(state, action) {
      state.item = action.payload;
    },
  },
});

export const { setShow, setDelete } = deleteSlice.actions;
export default deleteSlice.reducer