import { useMemo } from "react";
import { useSelector } from "react-redux";
import EmptyNotes from "./EmptyNotes";
import NotesCard from "./NotesCard";
import NoResult from "./NoResult";

const NotesList = ({ notes }) => {
  const showCompleted = useSelector(({ completedNotes }) => completedNotes);
  const searchedNotes = useSelector(({ searchedNote }) => searchedNote);

  const filteredNotes = useMemo(() => {
    const isCompletedFilter = (note) => (showCompleted ? note.completed : note);
    const searchFilter = (note) =>
      !searchedNotes || note.title.includes(searchedNotes);

    return notes.filter(
      (note) => isCompletedFilter(note) && searchFilter(note)
    );
  }, [notes, showCompleted, searchedNotes]);

  return (
    <div className="pt-10">
      {(!filteredNotes.length && searchedNotes && <NoResult />) ||
        (!filteredNotes.length && <EmptyNotes />)}
      <div className="grid max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-3 gap-5 pb-5">
        {filteredNotes.map((note) => (
          <NotesCard key={note.time} {...note} />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
