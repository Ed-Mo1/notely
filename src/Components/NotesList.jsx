import { useMemo } from "react";
import { useSelector } from "react-redux";
import EmptyNotes from "./EmptyNotes";
import NotesCard from "./NotesCard";
import NoResult from "./NoResult";
import { motion, AnimatePresence } from "framer-motion";
/**
 * The component that renders the list of notes
 * @param {Array} notes - The array of notes from the redux store
 * @returns {React.Component}
 */
const NotesList = ({ notes }) => {
  /**
   * Whether or not to show completed notes
   * @type {Boolean}
   */
  const showCompleted = useSelector(({ completedNotes }) => completedNotes);

  /**
   * The search query for the notes
   * @type {String}
   */
  const searchedNotes = useSelector(({ searchedNote }) => searchedNote);

  /**
   * Filter the notes based on the showCompleted and searchedNotes props
   * @type {Array}
   */
  const filteredNotes = useMemo(() => {
    /**
     * Check if a note should be included in the filtered notes list based on
     * the showCompleted and search props
     * @param {Object} note - The note to filter
     * @returns {Boolean}
     */
    const isCompletedFilter = (note) => (showCompleted ? note.completed : note);

    /**
     * Check if a note's title includes the search query
     * @param {Object} note - The note to filter
     * @returns {Boolean}
     */
    const searchFilter = (note) =>
      !searchedNotes || note.title.includes(searchedNotes);

    return notes.filter(
      (note) => isCompletedFilter(note) && searchFilter(note)
    );
  }, [notes, showCompleted, searchedNotes]);

  return (
    <AnimatePresence mode="popLayout">
      <div className="pt-10">
        {/* Render a message if no notes are found based on the search and showCompleted props */}
        {(!filteredNotes.length && searchedNotes && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
          >
            <NoResult />
          </motion.div>
        )) ||
          (!filteredNotes.length && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
            >
              <EmptyNotes />
            </motion.div>
          ))}
        <div className="grid max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-3 gap-5 pb-5">
          {/* Map over the filteredNotes and render a NotesCard component for each note */}
          {filteredNotes.map((note, i) => (
            <motion.div
              layout
              key={note.time}
              exit={{ scale: 0, opacity: 0 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <NotesCard {...note} />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default NotesList;
