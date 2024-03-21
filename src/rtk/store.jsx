import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./slices/notesSlice";
import deleteSlice from "./slices/deleteSlice";
import completedNotes from "./slices/completedNotesSlice";
import searchedNoteSlice from "./slices/searchedNoteSlice";
import addUpdateSlice from "./slices/addUpdateSlice";
const store = configureStore({
  reducer: {
    notes: notesSlice,
    deleteNote: deleteSlice,
    completedNotes: completedNotes,
    searchedNote: searchedNoteSlice,
    addUpdateSlice: addUpdateSlice,
  },
});

export default store;
