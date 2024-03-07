import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: JSON.parse(localStorage.getItem("notes")) || [],

  reducers: {
    addNote(state, action) {
      state.push(action.payload);
    },
    removeNote(state, action) {
      return state.filter((note) => note.time !== action.payload);
    },
    editNote(state, action) {
      const index = state.findIndex(
        (note) => note.time === action.payload.time
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },

    completeNote(state, action) {
      state.map((note) => {
        if (note.time === action.payload) {
          return (note.completed = !note.completed);
        }
      });
    },
  },
});
export const { addNote, removeNote, editNote, filterNotes, completeNote } =
  notesSlice.actions;
export default notesSlice.reducer;
