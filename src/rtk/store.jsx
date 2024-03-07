import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./slices/notesSlice";
import openAddSlice from "./slices/openAddSlice";
import UpdateNoteSlice from "./slices/openUpdateSlice";
import deleteSlice from "./slices/deleteSlice";
import completedNotes from "./slices/completedNotesSlice";
import searchedNoteSlice from "./slices/searchedNoteSlice";
const store = configureStore({
  reducer: {
    notes: notesSlice,
    addNote: openAddSlice,
    updateNote: UpdateNoteSlice,
    deleteNote: deleteSlice,
    completedNotes: completedNotes,
    searchedNote: searchedNoteSlice,
  },
});

export default store;
