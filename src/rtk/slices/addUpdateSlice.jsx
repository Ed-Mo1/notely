import { createSlice } from "@reduxjs/toolkit";

const addUpdateSlice = createSlice({
  name: "addUpdateSlice",
  initialState: {
    role: "add",
    show: false,
    id: null,
  },
  reducers: {
    setShow(state) {
     state.show= !state.show;
    },
    setRole(state, action) {
      state.role = action.payload;
    },
    setId(state, action) {
      state.id = action.payload;
    },
  },
});

export const { setShow, setRole ,setId} = addUpdateSlice.actions;
export default addUpdateSlice.reducer;
